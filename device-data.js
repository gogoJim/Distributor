/**
 * 消防安全設備 - 共用資料檔
 * 
 * ============================================================
 * 維護說明：
 * ------------------------------------------------------------
 * ✅ 新增設備：在陣列末端 push 一筆新資料，序號自動生成
 * ✅ 刪除設備：使用 splice 移除，後續序號自動遞補
 * ✅ 修改型號：直接改 model 欄位，序號不受影響
 * ✅ 停產設備：可先將 id 改為 "-" 或整筆刪除
 * 
 * 欄位說明：
 *   id           - 識別碼（對應 PDF2/[id].pdf 與 sticker/[id].html）
 *                  若無對應文件請填 "-"
 *   certNo       - 認可編號 / 案號
 *   deviceName   - 設備名稱
 *   manufacturer - 製造商 / 公司
 *   model        - 型號
 * ============================================================
 */

const DEVICE_DATA = [
    { id: "-",    certNo: "內授消字第1131300820號", deviceName: "小規模放水槍",           manufacturer: "HOCHIKI",         model: "GD-101" },
    { id: "C403", certNo: "內授消字第1131601828號", deviceName: "瓦斯警報器",             manufacturer: "YAZAKI",          model: "YF-517D" },
    { id: "-",    certNo: "內授消字第1141601200號", deviceName: "固定式放水型",           manufacturer: "HOCHIKI",         model: "GE-101" },
    { id: "A106", certNo: "AR-A104001",             deviceName: "火警受信總機",           manufacturer: "HOCHIKI",         model: "HRN-ABS2550FGA(T)" },
    { id: "B101", certNo: "AR-A110008",             deviceName: "火警受信總機",           manufacturer: "HOCHIKI AMERICA", model: "L@titude" },
   // { id: "-",    certNo: "AR-A111005",             deviceName: "火警受信總機",           manufacturer: "HOCHIKI AMERICA", model: "K1810-12" },
    { id: "D101", certNo: "AR-A114003",             deviceName: "火警受信總機",           manufacturer: "HOCHIKI AMERICA", model: "HCVR-3" },
    { id: "A116", certNo: "AR-A114004",             deviceName: "火警受信總機",           manufacturer: "HOCHIKI",         model: "HRU-ABS1020(OP)" },
    { id: "A115", certNo: "AR-A114005",             deviceName: "火警受信總機",           manufacturer: "HOCHIKI",         model: "HRR-AAS5610" },
    { id: "-",    certNo: "AV-A106001",             deviceName: "流水檢測裝置",           manufacturer: "HOCHIKI",         model: "GNA-EA100" },
    { id: "C606", certNo: "AV-A106005",             deviceName: "流水檢測裝置",           manufacturer: "HOCHIKI",         model: "GNA-FA100" },
    { id: "C607", certNo: "AV-A106006",             deviceName: "流水檢測裝置",           manufacturer: "HOCHIKI",         model: "GNA-FA150" },
    { id: "A401", certNo: "B-A103001",              deviceName: "火警警鈴",               manufacturer: "HOCHIKI",         model: "FBB-150ID" },
    { id: "C117", certNo: "B-A103002",              deviceName: "火警警鈴",               manufacturer: "HOCHIKI",         model: "FBB-150I" },
    { id: "C601", certNo: "CSP-A103009-1",          deviceName: "密閉式水噴頭",           manufacturer: "HOCHIKI",         model: "GQH-FE72-2" },
    { id: "-",    certNo: "CSP-A104001-1",          deviceName: "密閉式水噴頭",           manufacturer: "HOCHIKI",         model: "GQH-GA72-2" },
    { id: "-",    certNo: "CSP-A104002-1",          deviceName: "密閉式水噴頭",           manufacturer: "HOCHIKI",         model: "HF-E72-2" },
    { id: "C602", certNo: "CSP-A104003-1",          deviceName: "密閉式水噴頭",           manufacturer: "HOCHIKI",         model: "GQH-FE98-2" },
    { id: "-",    certNo: "DV-A106014",             deviceName: "一齊開放閥",             manufacturer: "TOYO",            model: "10-65FDEWF" },
    { id: "-",    certNo: "DV-A106018",             deviceName: "一齊開放閥",             manufacturer: "TOYO",            model: "10-50FDEWF" },
    { id: "-",    certNo: "FD-114025",              deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DFG-TW70L" },
    { id: "C304", certNo: "FD-A10213",              deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DRD-E" },
    { id: "-",    certNo: "FD-A10233",              deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "DFE-135" },
    { id: "C206", certNo: "FD-A10234",              deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "DSC-EA" },
    { id: "C302", certNo: "FD-A10250",              deviceName: "火警探測器",             manufacturer: "HOCHIKI EUROPE",  model: "DCD-1E-IS" },
    { id: "D303", certNo: "FD-A10256",              deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "DCD-135" },
    { id: "C208", certNo: "FD-A10257",              deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "SPC-24" },
    { id: "C107", certNo: "FD-A103008",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DHA-2L" },
    { id: "-",    certNo: "FD-A103017",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DFG-1W70L" },
    { id: "C102", certNo: "FD-A103018",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DSC-2" },
    { id: "C101", certNo: "FD-A103019",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "SLV-2" },
    { id: "B203", certNo: "FD-A105031",             deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "ACC-V" },
 // { id: "-",    certNo: "FD-A105032",             deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "ALN-V" },
    { id: "B202", certNo: "FD-A106004",             deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "ATJ-EA" },
 // { id: "-",    certNo: "FD-A106022",             deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "SOC-24VN" },
    { id: "A201", certNo: "FD-A107011",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "ALK-NLYA" },
    { id: "A205", certNo: "FD-A108010",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "ABC-12YA" },
    { id: "A202", certNo: "FD-A110001",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "ASB-2LYA" },
    { id: "C301", certNo: "FD-A110003",             deviceName: "火警探測器",             manufacturer: "HOCHIKI EUROPE",  model: "SOC-E-IS" },
    { id: "D302", certNo: "FD-A110010",             deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "SOE-24H" },
    { id: "D301", certNo: "FD-A111040",             deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "SOE-24V" },
    { id: "C109", certNo: "FD-A112017",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DRC-13A" },
    { id: "B201", certNo: "FD-A113003",             deviceName: "火警探測器",             manufacturer: "HOCHIKI AMERICA", model: "ALO-V" },
    { id: "C105", certNo: "FD-A114006",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DFS-1SE70RLB" },
  //  { id: "-",    certNo: "FD-A115",                deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DFV-1W70K-J-WI" },
    { id: "C605", certNo: "FH-A108001",             deviceName: "泡沫噴頭",               manufacturer: "HOCHIKI",         model: "GFH-D35" },
    { id: "-",    certNo: "L-A103002",              deviceName: "火警標示燈",             manufacturer: "HOCHIKI",         model: "TL-14D" },
    { id: "C115", certNo: "L-A115001",              deviceName: "火警標示燈",             manufacturer: "HOCHIKI",         model: "PPH-1A" },
    { id: "A204", certNo: "L-A115002",              deviceName: "火警標示燈",             manufacturer: "HOCHIKI",         model: "PRK-1A" },
    { id: "B305", certNo: "P-A105004",              deviceName: "火警發信機",             manufacturer: "HOCHIKI AMERICA", model: "DCP-AMS-LP" },
    { id: "A203", certNo: "FD-A110003",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "ATI-NWLHYA" },
    { id: "A204", certNo: "P-A114001",              deviceName: "火警發信機",             manufacturer: "HOCHIKI",         model: "PRK-1A" },
    { id: "C115", certNo: "P-A114002",              deviceName: "火警發信機",             manufacturer: "HOCHIKI",         model: "PPH-1A" },
 //   { id: "C402", certNo: "RD-A103003",             deviceName: "住宅用火災警報器",       manufacturer: "HOCHIKI",         model: "SS-FL-10HC" },
 //   { id: "C401", certNo: "RD-A106011",             deviceName: "住宅用火災警報器",       manufacturer: "HOCHIKI",         model: "SS-2LT-10HC" },
    { id: "A306", certNo: "RP-A10202",              deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-S4A" },
    { id: "A304", certNo: "RP-A103002",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-BY" },
    { id: "A307", certNo: "RP-A103003",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-G4" },
    { id: "A302", certNo: "RP-A103004",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-K4P" },
    { id: "A301", certNo: "RP-A103005",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-KL" },
    { id: "A305", certNo: "RP-A103006",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-R4(D2/H4)" },
    { id: "A303", certNo: "RP-A103008",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-K8" },
    { id: "B302", certNo: "RP-A105007",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI AMERICA", model: "DCP-DIMM" },
    { id: "B304", certNo: "RP-A105008",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI AMERICA", model: "DCP-SCI" },
    { id: "B303", certNo: "RP-A105009",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI AMERICA", model: "DCP-R2ML" },
    { id: "B301", certNo: "RP-A105011",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI AMERICA", model: "DCP-CZM" },
    { id: "-",    certNo: "RP-A108007",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-SCI2" },
    { id: "A309", certNo: "RP-A108008",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-PSCI" },
    { id: "A308", certNo: "RP-A111005",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CHW-ADSCI2" },
    { id: "A312", certNo: "RP-A114002",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CMA-ABW2040(OP)" },
    { id: "A310", certNo: "RP-A115001",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CMA-ABW510(OP)" },
    { id: "A311", certNo: "RP-A115002",             deviceName: "火警中繼器",             manufacturer: "HOCHIKI",         model: "CMA-ABW1020(OP)" },
    { id: "C103", certNo: "FD-A115009",             deviceName: "火警探測器",             manufacturer: "HOCHIKI",         model: "DFV-1W70KA-J-WI" }
];