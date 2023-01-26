






































    void WalletDB::setUsbPath(IWalletDB& db, const std::string& sUsbPath)
    {
        storage::setBlobVar(db, UsbHw, sUsbPath);
    }

    IWalletDB::Ptr WalletDB::initUsb(const string& path, const SecString& password, const std::string& sUsbPath, bool separateDBForPrivateData)
    {
        auto pKeyKeeper = UsbKeyKeeper::Open(sUsbPath);

        auto pRet = init(path, password, pKeyKeeper, separateDBForPrivateData);

        setUsbPath(*pRet, sUsbPath);

        return pRet;
    }













































