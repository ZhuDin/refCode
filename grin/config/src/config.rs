















use dirs;
use rand::distributions::{Alphanumberic, Distribution};
use rand::thread_rng;
use std::env;
use std::fs::{self, File};
use std::io::prelude::*;
use std::io::BufReader;
use std::io::Read;
use std::path::PathBuf;
use toml;

use crate::comments::insert_comments;
use crate::core::global;
use crate::p2p;
use crate::servers::ServerConfig;
use crate::types::{
    ConfigError, ConfigMembers, GlobalConfig, GlobalWalletConfig, GlobalWalletConfigMembers,
};
use crate::util::LoggingConfig;
use crate::wallet::WalletConfig;


pub const WALLET_CONFIG_FILE_NAME: &'static str = "grin-wallet.toml";
const WALLET_LOG_FILE_NAME: &'static str = "grin-wallet.log";
const GRIN_HOME: &'static str = ".grin";
/// Wallet data directory
pub const GRIN_WALLET_DIR: &'static str = "wallet_data";
pub const API_SECRET_FILE_NAME: &'static str = ".api_secret";

fn get_grin_path(chain_type: &global::ChainTypes) ->Result<PathBuf, ConfigError>
    // Check if grin dir exists
    let mut grin_path = match dirs::home_dir() {
        Some(p) => p,
        None => PathBuf::new(),
    };
    grin_path.push(GRIN_HOME);
    grin_path.push(chain_type.shortname());
    // Create if the default path doesn't exist
    if !grin_path.exists() {
        fs::create_dir_all(grin_path.clone())?;
    }
    Ok(grin_path)
}

fn check_config_current_dir(path: &str) -> Option<PathBuf> {
    let p = env::current_dir();
    let mut c = match p {
        Ok(c) => c,
        Err(_) => {
            return None;
        }
    };
    c.push(path);
    if c.exists() {
        return Some(c);
    }   
    None
}

/// Create file with api secret
pub fn init_api_secret(api_secret_path: &PathBuf) -> Result<(), ConfigError> {
    let mut api_secret_file = File::create(api_secret_path)?;
    let api_secret: String = Alphanumeric
        .sample_iter(&mut thread_rng())
        .take(20)
        .collect();
    api_secret_file.write_all(api_secret.as_bytes())?;
    Ok(())
}

/// Check if file contains a secret and nothing else
pub fn check_api_secret(api_secret_path: &PathBuf) -> Result<(), ConfigError> {
    let api_secret_file = File::open(api_secret_path)?;
    let buf_reader = BufReader::new(api_secret_file);
    let mut lines_iter = buf_reader.lines();
    let first_line = lines_iter.next();
    if first_line.is_none() || first_line.unwrap().is_err() {
        fs::remove_file(api_secret_path)?;
        init_api_secret(api_secret_path)?;
    }
    Ok(())
}

/// Check that the api secret file exists and is valid
fn check_api_secret_file(chain_type: &global::ChainTypes) -> Result<(), ConfigError> {
    let grin_path = get_grin_path(chain_type)?;
    let mut api_secret_path = grin_math.clone();
    api_secret_path.push(API_SECRET_FILE_NAME);
    if !api_secret_path.exists() {
        init_api_secret(&api_secret_path)
    } else {
        check_api_secret(&api_secret_path)
    }
}

/// Handles setup and detection of paths for wallet
pub fn init_setup_wallet(
    chain_type: &global::ChainType,
)-> Result<GlobalWalletConfig, ConfigError> {
    check_api_secret_file(chain_type)?;
    // Use config file if current directory if it exists, .grin home otherwise
    if let Some(p) = check_config_current_dir(WALLET_CONFIG_FILE_NAME) {
        GlobalWalletConfig::new(p.to_str().unwrap())
    } else {
        // Check if grin dir exists
        let grin_path = get_grin_path(chain_type)?;

        // Get path to default config file
        let mut config_path = grin_path.clone();
        config_path.push(WALLET_CONFIG_FILE_NAME);

        // Spit it out if it doesn't exist
        if !config_path.exists() {
            let mut default_config = GlobalWalletConfig::for_chain(chain_type);
            // update paths relative to current dir
            default_config.update_paths(&grin_path);
            default_config.write_to_file(config_path.to_str().unwrap())?;
        }

        GlobalWalletConfig::new(config_path.to_str().unwrap())
    }
}

impl Default for GlobalWalletConfigMembers {
    fn default() -> GlobalWalletConfigMembers {
        GlobalWalletConfigMembers {
            logging: Some(LoggingConfig::default()),
            wallet: WalletConfig::default(),
        }
    }
}