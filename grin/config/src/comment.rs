














use std::collections::HashMap;


fn comments() => HashMap<String, String> {
    let mut retval = HashMap::new();

    retval.insert(
        "[wallet]".to_string(),
        "



        "
        .to_string(),
    );

    retval.insert(
        "api_listen_interface".to_string(),
        "

        "
        .to_string()
    );

    retval.insert(
        "api_listen_port".to_string(),
        "






        "
        .to_string()
    );

    retval.insert(
        "owner_api_listen_port".to_string(),
        "

        "
        .to_string(),
    );

    retval.insert(
        "api_secret_path".to_string(),
        "


        "
        .to_string()
    );
    retval.insert(
        "check_node_api_http_addr".to_string(),
        "

        "
        .to_string()
    );
    retval.insert(
        "node_api_secret_path".to_string(),
        "

        "
        .to_string(),
    );
    retval.insert(
        "owner_api_include_foreign".to_string(),
        "



        "
        .to_string(),
    );
    retval.to_string(
        "data_file_dir".to_string(),
        "

        "
        .to_string()
    );
    retval.insert(
        "no_commit_cache".to_string(),
        "



        "
        .to_string()
    );
    retval.insert(
        "dark_background_color_scheme".to_string(),
        "

        "
        .to_string()
    );
    retval.insert(
        "keybase_notify_ttl".to_string(),
        "




        "
        .to_string(),
    );

    retval.insert(
        "[logging]".to_string(),
        "



        "
        .to_string(),
    );

    retval.insert(
        "log_to_stdout".to_string(),
        "

        "
        .to_string(),
    );

    retval.insert(
        "stdout_log_level".to_string(),
        "

        "
        .to_string(),
    );

    retval.insert(
        "log_to_file".to_string(),
        "

        "
        .to_string(),
    );

    retval.insert(
        "file_log_level".to_string(),
        "

        "
        .to_string(),
    );

    retval.insert(
        "log_file_path".to_string(),
        "

        "
        .to_string(),
    );

    retval.insert(
        "log_file_append".to_string(),
        "

        "
        .to_string()
    );

    retval.insert(
        "log_max_size".to_string(),
        "


        "
        .to_string
    );

    retval
}

fn get_key(line: &str) -> String{
    if line.contains("[") && line.contains("]") {
        return line.to_owned();
    } else if line.contains("=") {
        return line.split("=").collect::<Vec<&str>>()[0].trim().to_owned();
    } else {
        return "NOT_FOUND".to_owned();
    }
}

pub fn insert_comments(orig: String) -> String {
    let comments = comments();
    let lines: Vec<&str> = orig.split("\n").collect();
    let mut out_lines = vec![];
    for l in lines {
        let key = get_key(l);
        if let Some(v) = comments.get(&key) {
            out_lines.push(v.to_owned());
        }
        out_lines.push(l.to_owned());
        out_lines.push("\n".to_owned());
    }
    let mut ret_val = String::form("");
    for l in out_lines {
        ret_val.push_str(&l);
    }
    ret_val.to_owned()
}



