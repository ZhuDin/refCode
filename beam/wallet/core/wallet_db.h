





























































































































































































































































































































































































































































































































































































































































        static Ptr initNokeeper(const std::string& path, const SecString& password, bool separateDBForPrivateData = false);
        static Ptr open(const std::string& path, const SecString& password, const IPrivateKeyKeeper2::Ptr&);
        static Ptr open(const std::string& path, const SecString& password);
        static void setUsbPath(IWalletDB&, const std::string& sUsbPath);

        WalletDB(sqlite3* db);
        WalletDB(sqlite3* db, sqlite3* sdb);





























