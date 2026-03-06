const elementos = {
    1: {
        ec: "1s¹", est: "Gasoso", pf: "-259,16", pe: "-252,87", d: "0,00009 g/cm³", desc: "Henry Cavendish", ano: "1766"
    },
    2: {
        ec: "1s²", est: "Gasoso", pf: "-272,20", pe: "-268,93", d: "0,000179 g/cm³", desc: "Pierre Janssen", ano: "1868"
    },
    3: {
        ec: "[He] 2s¹", est: "Sólido", pf: "180,54", pe: "1342", d: "0,534 g/cm³", desc: "Johan A. Arfwedson", ano: "1817"
    },
    4: {
        ec: "[He] 2s²", est: "Sólido", pf: "1287", pe: "2469", d: "1,85 g/cm³", desc: "Louis N. Vauquelin", ano: "1798"
    },
    5: {
        ec: "[He] 2s² 2p¹", est: "Sólido", pf: "2077", pe: "4000", d: "2,34 g/cm³", desc: "Gay-Lussac / Thénard", ano: "1808"
    },
    6: {
        ec: "[He] 2s² 2p²", est: "Sólido", pf: "3550", pe: "4027", d: "2,267 g/cm³", desc: "Antiguidade", ano: "~3750 a.C."
    },
    7: {
        ec: "[He] 2s² 2p³", est: "Gasoso", pf: "-210,00", pe: "-195,79", d: "0,001251 g/cm³", desc: "Daniel Rutherford", ano: "1772"
    },
    8: {
        ec: "[He] 2s² 2p⁴", est: "Gasoso", pf: "-218,79", pe: "-182,96", d: "0,001429 g/cm³", desc: "Carl W. Scheele", ano: "1771"
    },
    9: {
        ec: "[He] 2s² 2p⁵", est: "Gasoso", pf: "-219,67", pe: "-188,11", d: "0,001696 g/cm³", desc: "André-Marie Ampère", ano: "1810"
    },
    10: {
        ec: "[He] 2s² 2p⁶", est: "Gasoso", pf: "-248,59", pe: "-246,08", d: "0,0009 g/cm³", desc: "William Ramsay / Morris Travers", ano: "1898"
    },
    11: {
        ec: "[Ne] 3s¹", est: "Sólido", pf: "97,72", pe: "883", d: "0,971 g/cm³", desc: "Humphry Davy", ano: "1807"
    },
    12: {
        ec: "[Ne] 3s²", est: "Sólido", pf: "650", pe: "1090", d: "1,738 g/cm³", desc: "Joseph Black", ano: "1755"
    },
    13: {
        ec: "[Ne] 3s² 3p¹", est: "Sólido", pf: "660,32", pe: "2519", d: "2,698 g/cm³", desc: "Hans Christian Ørsted", ano: "1825"
    },
    14: {
        ec: "[Ne] 3s² 3p²", est: "Sólido", pf: "1414", pe: "3265", d: "2,329 g/cm³", desc: "Jöns Jacob Berzelius", ano: "1824"
    },
    15: {
        ec: "[Ne] 3s² 3p³", est: "Sólido", pf: "44,15", pe: "280,5", d: "1,82 g/cm³", desc: "Hennig Brand", ano: "1669"
    },
    16: {
        ec: "[Ne] 3s² 3p⁴", est: "Sólido", pf: "115,21", pe: "444,6", d: "2,067 g/cm³", desc: "Antiguidade", ano: "~2000 a.C."
    },
    17: {
        ec: "[Ne] 3s² 3p⁵", est: "Gasoso", pf: "-101,5", pe: "-34,04", d: "0,003214 g/cm³", desc: "Carl W. Scheele", ano: "1774"
    },
    18: {
        ec: "[Ne] 3s² 3p⁶", est: "Gasoso", pf: "-189,34", pe: "-185,85", d: "0,001784 g/cm³", desc: "Lord Rayleigh / William Ramsay", ano: "1894"
    },
    19: {
        ec: "[Ar] 4s¹", est: "Sólido", pf: "63,5", pe: "759", d: "0,862 g/cm³", desc: "Humphry Davy", ano: "1807"
    },
    20: {
        ec: "[Ar] 4s²", est: "Sólido", pf: "842", pe: "1484", d: "1,55 g/cm³", desc: "Humphry Davy", ano: "1808"
    },
    21: {
        ec: "[Ar] 3d¹ 4s²", est: "Sólido", pf: "1541", pe: "2836", d: "2,989 g/cm³", desc: "Lars Fredrik Nilson", ano: "1879"
    },
    22: {
        ec: "[Ar] 3d² 4s²", est: "Sólido", pf: "1668", pe: "3287", d: "4,507 g/cm³", desc: "William Gregor", ano: "1791"
    },
    23: {
        ec: "[Ar] 3d³ 4s²", est: "Sólido", pf: "1910", pe: "3407", d: "6,11 g/cm³", desc: "Andrés Manuel del Río", ano: "1801"
    },
    24: {
        ec: "[Ar] 3d⁵ 4s¹", est: "Sólido", pf: "1907", pe: "2671", d: "7,15 g/cm³", desc: "Louis Nicolas Vauquelin", ano: "1797"
    },
    25: {
        ec: "[Ar] 3d⁵ 4s²", est: "Sólido", pf: "1246", pe: "2061", d: "7,44 g/cm³", desc: "Johan Gottlieb Gahn", ano: "1774"
    },
    26: {
        ec: "[Ar] 3d⁶ 4s²", est: "Sólido", pf: "1538", pe: "2862", d: "7,874 g/cm³", desc: "Antiguidade", ano: "~5000 a.C."
    },
    27: {
        ec: "[Ar] 3d⁷ 4s²", est: "Sólido", pf: "1495", pe: "2927", d: "8,90 g/cm³", desc: "Georg Brandt", ano: "1735"
    },
    28: {
        ec: "[Ar] 3d⁸ 4s²", est: "Sólido", pf: "1455", pe: "2913", d: "8,908 g/cm³", desc: "Axel Fredrik Cronstedt", ano: "1751"
    },
    29: {
        ec: "[Ar] 3d¹⁰ 4s¹", est: "Sólido", pf: "1084,62", pe: "2562", d: "8,96 g/cm³", desc: "Antiguidade", ano: "~9000 a.C."
    },
    30: {
        ec: "[Ar] 3d¹⁰ 4s²", est: "Sólido", pf: "419,53", pe: "907", d: "7,134 g/cm³", desc: "Antiguidade", ano: "~1000 a.C."
    },
    31: {
        ec: "[Ar] 3d¹⁰ 4s² 4p¹", est: "Sólido", pf: "29,76", pe: "2204", d: "5,907 g/cm³", desc: "Paul Emile Lecoq de Boisbaudran", ano: "1875"
    },
    32: {
        ec: "[Ar] 3d¹⁰ 4s² 4p²", est: "Sólido", pf: "938,25", pe: "2833", d: "5,323 g/cm³", desc: "Clemens Winkler", ano: "1886"
    },
    33: {
        ec: "[Ar] 3d¹⁰ 4s² 4p³", est: "Sólido", pf: "816,9", pe: "614", d: "5,776 g/cm³", desc: "Albertus Magnus", ano: "~1250"
    },
    34: {
        ec: "[Ar] 3d¹⁰ 4s² 4p⁴", est: "Sólido", pf: "221", pe: "685", d: "4,809 g/cm³", desc: "Jöns Jacob Berzelius", ano: "1817"
    },
    35: {
        ec: "[Ar] 3d¹⁰ 4s² 4p⁵", est: "Líquido", pf: "-7,2", pe: "58,8", d: "3,122 g/cm³", desc: "Antoine Jérôme Balard", ano: "1826"
    },
    36: {
        ec: "[Ar] 3d¹⁰ 4s² 4p⁶", est: "Gasoso", pf: "-157,37", pe: "-153,41", d: "0,003749 g/cm³", desc: "William Ramsay / Morris Travers", ano: "1898"
    },
    37: {
        ec: "[Kr] 5s¹", est: "Sólido", pf: "39,31", pe: "688", d: "1,532 g/cm³", desc: "Robert Bunsen / Gustav Kirchhoff", ano: "1861"
    },
    38: {
        ec: "[Kr] 5s²", est: "Sólido", pf: "777", pe: "1382", d: "2,64 g/cm³", desc: "William Cruickshank", ano: "1790"
    },
    39: {
        ec: "[Kr] 4d¹ 5s²", est: "Sólido", pf: "1526", pe: "3345", d: "4,469 g/cm³", desc: "Johan Gadolin", ano: "1794"
    },
    40: {
        ec: "[Kr] 4d² 5s²", est: "Sólido", pf: "1855", pe: "4409", d: "6,506 g/cm³", desc: "Martin Heinrich Klaproth", ano: "1789"
    },
    41: {
        ec: "[Kr] 4d⁴ 5s¹", est: "Sólido", pf: "2477", pe: "4744", d: "8,57 g/cm³", desc: "Charles Hatchett", ano: "1801"
    },
    42: {
        ec: "[Kr] 4d⁵ 5s¹", est: "Sólido", pf: "2623", pe: "4639", d: "10,22 g/cm³", desc: "Carl W. Scheele", ano: "1778"
    },
    43: {
        ec: "[Kr] 4d⁵ 5s²", est: "Sólido", pf: "2157", pe: "4265", d: "11,5 g/cm³", desc: "Carlo Perrier / Emilio Segrè", ano: "1937"
    },
    44: {
        ec: "[Kr] 4d⁷ 5s¹", est: "Sólido", pf: "2334", pe: "4150", d: "12,37 g/cm³", desc: "Karl Ernst Claus", ano: "1844"
    },
    45: {
        ec: "[Kr] 4d⁸ 5s¹", est: "Sólido", pf: "1964", pe: "3695", d: "12,41 g/cm³", desc: "William Hyde Wollaston", ano: "1803"
    },
    46: {
        ec: "[Kr] 4d¹⁰", est: "Sólido", pf: "1554,9", pe: "2963", d: "12,023 g/cm³", desc: "William Hyde Wollaston", ano: "1803"
    },
    47: {
        ec: "[Kr] 4d¹⁰ 5s¹", est: "Sólido", pf: "961,78", pe: "2162", d: "10,501 g/cm³", desc: "Antiguidade", ano: "~5000 a.C."
    },
    48: {
        ec: "[Kr] 4d¹⁰ 5s²", est: "Sólido", pf: "321,07", pe: "767", d: "8,69 g/cm³", desc: "Friedrich Stromeyer", ano: "1817"
    },
    49: {
        ec: "[Kr] 4d¹⁰ 5s² 5p¹", est: "Sólido", pf: "156,6", pe: "2072", d: "7,31 g/cm³", desc: "Ferdinand Reich / Hieronymous Richter", ano: "1863"
    },
    50: {
        ec: "[Kr] 4d¹⁰ 5s² 5p²", est: "Sólido", pf: "231,93", pe: "2602", d: "7,287 g/cm³", desc: "Antiguidade", ano: "~3500 a.C."
    },
    51: {
        ec: "[Kr] 4d¹⁰ 5s² 5p³", est: "Sólido", pf: "630,63", pe: "1587", d: "6,685 g/cm³", desc: "Antiguidade", ano: "~3000 a.C."
    },
    52: {
        ec: "[Kr] 4d¹⁰ 5s² 5p⁴", est: "Sólido", pf: "449,51", pe: "988", d: "6,232 g/cm³", desc: "Franz-Joseph Müller von Reichenstein", ano: "1782"
    },
    53: {
        ec: "[Kr] 4d¹⁰ 5s² 5p⁵", est: "Sólido", pf: "113,7", pe: "184,3", d: "4,93 g/cm³", desc: "Bernard Courtois", ano: "1811"
    },
    54: {
        ec: "[Kr] 4d¹⁰ 5s² 5p⁶", est: "Gasoso", pf: "-111,75", pe: "-108,09", d: "0,005894 g/cm³", desc: "William Ramsay / Morris Travers", ano: "1898"
    },
    55: {
        ec: "[Xe] 6s¹", est: "Sólido", pf: "28,44", pe: "671", d: "1,873 g/cm³", desc: "Robert Bunsen / Gustav Kirchhoff", ano: "1860"
    },
    56: {
        ec: "[Xe] 6s²", est: "Sólido", pf: "727", pe: "1897", d: "3,594 g/cm³", desc: "Carl W. Scheele", ano: "1774"
    },
    57: {
        ec: "[Xe] 5d¹ 6s²", est: "Sólido", pf: "920", pe: "3464", d: "6,145 g/cm³", desc: "Carl Gustaf Mosander", ano: "1839"
    },
    58: {
        ec: "[Xe] 4f¹ 5d¹ 6s²", est: "Sólido", pf: "798", pe: "3443", d: "6,77 g/cm³", desc: "Martin Heinrich Klaproth", ano: "1803"
    },
    59: {
        ec: "[Xe] 4f³ 6s²", est: "Sólido", pf: "931", pe: "3520", d: "6,773 g/cm³", desc: "Carl Auer von Welsbach", ano: "1885"
    },
    60: {
        ec: "[Xe] 4f⁴ 6s²", est: "Sólido", pf: "1016", pe: "3074", d: "7,007 g/cm³", desc: "Carl Auer von Welsbach", ano: "1885"
    },
    61: {
        ec: "[Xe] 4f⁵ 6s²", est: "Sólido", pf: "1042", pe: "3000", d: "7,26 g/cm³", desc: "Chien Shiung Wu / Emilio Segrè", ano: "1945"
    },
    62: {
        ec: "[Xe] 4f⁶ 6s²", est: "Sólido", pf: "1074", pe: "1794", d: "7,52 g/cm³", desc: "Paul Emile Lecoq de Boisbaudran", ano: "1879"
    },
    63: {
        ec: "[Xe] 4f⁷ 6s²", est: "Sólido", pf: "822", pe: "1529", d: "5,243 g/cm³", desc: "Eugène-Anatole Demarçay", ano: "1901"
    },
    64: {
        ec: "[Xe] 4f⁷ 5d¹ 6s²", est: "Sólido", pf: "1313", pe: "3273", d: "7,895 g/cm³", desc: "Jean Charles Galissard de Marignac", ano: "1880"
    },
    65: {
        ec: "[Xe] 4f⁹ 6s²", est: "Sólido", pf: "1356", pe: "3230", d: "8,229 g/cm³", desc: "Carl Gustaf Mosander", ano: "1843"
    },
    66: {
        ec: "[Xe] 4f¹⁰ 6s²", est: "Sólido", pf: "1412", pe: "2567", d: "8,55 g/cm³", desc: "Paul Emile Lecoq de Boisbaudran", ano: "1886"
    },
    67: {
        ec: "[Xe] 4f¹¹ 6s²", est: "Sólido", pf: "1474", pe: "2700", d: "8,795 g/cm³", desc: "Jacques-Louis Soret", ano: "1878"
    },
    68: {
        ec: "[Xe] 4f¹² 6s²", est: "Sólido", pf: "1529", pe: "2868", d: "9,066 g/cm³", desc: "Carl Gustaf Mosander", ano: "1843"
    },
    69: {
        ec: "[Xe] 4f¹³ 6s²", est: "Sólido", pf: "1545", pe: "1950", d: "9,321 g/cm³", desc: "Per Teodor Cleve", ano: "1879"
    },
    70: {
        ec: "[Xe] 4f¹⁴ 6s²", est: "Sólido", pf: "824", pe: "1196", d: "6,965 g/cm³", desc: "Jean Charles Galissard de Marignac", ano: "1878"
    },
    71: {
        ec: "[Xe] 4f¹⁴ 5d¹ 6s²", est: "Sólido", pf: "1663", pe: "3402", d: "9,84 g/cm³", desc: "Georges Urbain / Carl Auer von Welsbach", ano: "1907"
    },
    72: {
        ec: "[Xe] 4f¹⁴ 5d² 6s²", est: "Sólido", pf: "2233", pe: "4603", d: "13,31 g/cm³", desc: "Dirk Coster / George de Hevesy", ano: "1923"
    },
    73: {
        ec: "[Xe] 4f¹⁴ 5d³ 6s²", est: "Sólido", pf: "3017", pe: "5458", d: "16,654 g/cm³", desc: "Anders Gustaf Ekeberg", ano: "1802"
    },
    74: {
        ec: "[Xe] 4f¹⁴ 5d⁴ 6s²", est: "Sólido", pf: "3422", pe: "5555", d: "19,25 g/cm³", desc: "Carl W. Scheele", ano: "1783"
    },
    75: {
        ec: "[Xe] 4f¹⁴ 5d⁵ 6s²", est: "Sólido", pf: "3186", pe: "5596", d: "21,02 g/cm³", desc: "Masataka Ogawa", ano: "1908"
    },
    76: {
        ec: "[Xe] 4f¹⁴ 5d⁶ 6s²", est: "Sólido", pf: "3033", pe: "5012", d: "22,587 g/cm³", desc: "Smithson Tennant", ano: "1803"
    },
    77: {
        ec: "[Xe] 4f¹⁴ 5d⁷ 6s²", est: "Sólido", pf: "2446", pe: "4428", d: "22,562 g/cm³", desc: "Smithson Tennant", ano: "1803"
    },
    78: {
        ec: "[Xe] 4f¹⁴ 5d⁹ 6s¹", est: "Sólido", pf: "1768,3", pe: "3825", d: "21,46 g/cm³", desc: "Antonio de Ulloa", ano: "1735"
    },
    79: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", est: "Sólido", pf: "1064,18", pe: "2856", d: "19,282 g/cm³", desc: "Antiguidade", ano: "~6000 a.C."
    },
    80: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", est: "Líquido", pf: "-38,83", pe: "356,73", d: "13,534 g/cm³", desc: "Antiguidade", ano: "~1500 a.C."
    },
    81: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", est: "Sólido", pf: "304", pe: "1473", d: "11,85 g/cm³", desc: "William Crookes", ano: "1861"
    },
    82: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", est: "Sólido", pf: "327,46", pe: "1749", d: "11,342 g/cm³", desc: "Antiguidade", ano: "~7000 a.C."
    },
    83: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", est: "Sólido", pf: "271,4", pe: "1564", d: "9,807 g/cm³", desc: "Claude François Geoffroy", ano: "1753"
    },
    84: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", est: "Sólido", pf: "254", pe: "962", d: "9,32 g/cm³", desc: "Marie Curie / Pierre Curie", ano: "1898"
    },
    85: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", est: "Sólido", pf: "302", pe: "337", d: "–", desc: "Dale R. Corson / Kenneth Ross MacKenzie / Emilio Segrè", ano: "1940"
    },
    86: {
        ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", est: "Gasoso", pf: "-71", pe: "-61,7", d: "0,00973 g/cm³", desc: "Friedrich Ernst Dorn", ano: "1900"
    },
    87: {
        ec: "[Rn] 7s¹", est: "Sólido", pf: "27", pe: "677", d: "–", desc: "Marguerite Perey", ano: "1939"
    },
    88: {
        ec: "[Rn] 7s²", est: "Sólido", pf: "696", pe: "1500", d: "5,5 g/cm³", desc: "Marie Curie / Pierre Curie", ano: "1898"
    },
    89: {
        ec: "[Rn] 6d¹ 7s²", est: "Sólido", pf: "1050", pe: "3200", d: "10,07 g/cm³", desc: "Friedrich Oskar Giesel", ano: "1902"
    },
    90: {
        ec: "[Rn] 6d² 7s²", est: "Sólido", pf: "1750", pe: "4788", d: "11,72 g/cm³", desc: "Jöns Jacob Berzelius", ano: "1829"
    },
    91: {
        ec: "[Rn] 5f² 6d¹ 7s²", est: "Sólido", pf: "1572", pe: "4000", d: "15,37 g/cm³", desc: "Kasimir Fajans / Oswald Helmuth Göhring", ano: "1913"
    },
    92: {
        ec: "[Rn] 5f³ 6d¹ 7s²", est: "Sólido", pf: "1135", pe: "4131", d: "18,95 g/cm³", desc: "Martin Heinrich Klaproth", ano: "1789"
    },
    93: {
        ec: "[Rn] 5f⁴ 6d¹ 7s²", est: "Sólido", pf: "644", pe: "3902", d: "20,45 g/cm³", desc: "Edwin McMillan / Philip Abelson", ano: "1940"
    },
    94: {
        ec: "[Rn] 5f⁶ 7s²", est: "Sólido", pf: "640", pe: "3228", d: "19,84 g/cm³", desc: "Glenn T. Seaborg / Edwin McMillan / Joseph W. Kennedy / Arthur Wahl", ano: "1940"
    },
    95: {
        ec: "[Rn] 5f⁷ 7s²", est: "Sólido", pf: "1176", pe: "2011", d: "13,69 g/cm³", desc: "Glenn T. Seaborg / Ralph A. James / Leon O. Morgan / Albert Ghiorso", ano: "1944"
    },
    96: {
        ec: "[Rn] 5f⁷ 6d¹ 7s²", est: "Sólido", pf: "1345", pe: "3110", d: "13,51 g/cm³", desc: "Glenn T. Seaborg / Ralph A. James / Albert Ghiorso", ano: "1944"
    },
    97: {
        ec: "[Rn] 5f⁹ 7s²", est: "Sólido", pf: "1050", pe: "2627", d: "14,79 g/cm³", desc: "Stanley G. Thompson / Albert Ghiorso / Glenn T. Seaborg", ano: "1949"
    },
    98: {
        ec: "[Rn] 5f¹⁰ 7s²", est: "Sólido", pf: "900", pe: "1472", d: "15,1 g/cm³", desc: "Stanley G. Thompson / Kenneth Street Jr. / Albert Ghiorso / Glenn T. Seaborg", ano: "1950"
    },
    99: {
        ec: "[Rn] 5f¹¹ 7s²", est: "Sólido", pf: "860", pe: "996", d: "8,84 g/cm³", desc: "Albert Ghiorso et al.", ano: "1952"
    },
    100: {
        ec: "[Rn] 5f¹² 7s²", est: "Sólido", pf: "1527", pe: "–", d: "–", desc: "Albert Ghiorso et al.", ano: "1952"
    },
    101: {
        ec: "[Rn] 5f¹³ 7s²", est: "Sólido", pf: "827", pe: "–", d: "–", desc: "Albert Ghiorso et al.", ano: "1955"
    },
    102: {
        ec: "[Rn] 5f¹⁴ 7s²", est: "Sólido", pf: "827", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research", ano: "1966"
    },
    103: {
        ec: "[Rn] 5f¹⁴ 7s² 7p¹", est: "Sólido", pf: "1627", pe: "–", d: "–", desc: "Albert Ghiorso et al.", ano: "1961"
    },
    104: {
        ec: "[Rn] 5f¹⁴ 6d² 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research", ano: "1964"
    },
    105: {
        ec: "[Rn] 5f¹⁴ 6d³ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research / Lawrence Berkeley National Laboratory", ano: "1970"
    },
    106: {
        ec: "[Rn] 5f¹⁴ 6d⁴ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Lawrence Berkeley National Laboratory", ano: "1974"
    },
    107: {
        ec: "[Rn] 5f¹⁴ 6d⁵ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "GSI Helmholtzzentrum", ano: "1981"
    },
    108: {
        ec: "[Rn] 5f¹⁴ 6d⁶ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "GSI Helmholtzzentrum", ano: "1984"
    },
    109: {
        ec: "[Rn] 5f¹⁴ 6d⁷ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "GSI Helmholtzzentrum", ano: "1982"
    },
    110: {
        ec: "[Rn] 5f¹⁴ 6d⁸ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "GSI Helmholtzzentrum", ano: "1994"
    },
    111: {
        ec: "[Rn] 5f¹⁴ 6d⁹ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "GSI Helmholtzzentrum", ano: "1994"
    },
    112: {
        ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "GSI Helmholtzzentrum", ano: "1996"
    },
    113: {
        ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "RIKEN", ano: "2003"
    },
    114: {
        ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research / Lawrence Livermore National Laboratory", ano: "1998"
    },
    115: {
        ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research / Lawrence Livermore National Laboratory", ano: "2003"
    },
    116: {
        ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research / Lawrence Livermore National Laboratory", ano: "2000"
    },
    117: {
        ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research / Lawrence Livermore National Laboratory / Oak Ridge National Laboratory", ano: "2010"
    },
    118: {
        ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", est: "Desconhecido", pf: "–", pe: "–", d: "–", desc: "Joint Institute for Nuclear Research / Lawrence Livermore National Laboratory", ano: "2002"
    }
};

const categorias = {
    ametais: "Ametal",
    gasNobre: "Gás nobre",
    alcalinos: "Metal alcalino",
    alcalinosTerrosos: "Metal alcalino-terroso",
    semiMetal: "Semimetal",
    Halogenios: "Halogênio",
    outrosMetais: "Outros metais",
    metaisTransicao: "Metal de transição",
    Lantanideos: "Lantanídeo",
    Actinideos: "Actinídeo"
};

const cores = {
    ametais: "#2ca114",
    gasNobre: "#3a8fd4",
    alcalinos: "#ffae00",
    alcalinosTerrosos: "#d4d416",
    semiMetal: "#07df8c",
    Halogenios: "#00e1ff",
    outrosMetais: "#8400ff",
    metaisTransicao: "#c08080",
    Lantanideos: "#07c5a5",
    Actinideos: "#e2bdd8"
};

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <span class="modal-numero"></span>
                <span class="modal-simbolo"></span>
                <span class="modal-nome"></span>
                <span class="modal-massa"></span>
            </div>
            <div class="modal-categoria"></div>
            <div class="modal-info">
                <div class="modal-row"><span class="modal-label">Configuração eletrônica</span><span class="modal-value" id="mi-ec"></span></div>
                <div class="modal-row"><span class="modal-label">Estado físico</span><span class="modal-value" id="mi-est"></span></div>
                <div class="modal-row"><span class="modal-label">Ponto de fusão</span><span class="modal-value" id="mi-pf"></span></div>
                <div class="modal-row"><span class="modal-label">Ponto de ebulição</span><span class="modal-value" id="mi-pe"></span></div>
                <div class="modal-row"><span class="modal-label">Densidade</span><span class="modal-value" id="mi-d"></span></div>
                <div class="modal-row"><span class="modal-label">Descoberto por</span><span class="modal-value" id="mi-desc"></span></div>
                <div class="modal-row"><span class="modal-label">Ano de descoberta</span><span class="modal-value" id="mi-ano"></span></div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const content = overlay.querySelector(".modal-content");

    function getElementInfo(cell) {
        const numero = cell.querySelector("div").textContent.trim();
        const simbolo = cell.querySelector("h2").textContent.trim();
        let nome = "";
        let massa = "";
        const nodes = cell.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName === "BR") {
                if (i > 0 && nodes[i - 1].nodeType === 3) nome = nodes[i - 1].textContent.trim();
                if (i < nodes.length - 1 && nodes[i + 1].nodeType === 3) massa = nodes[i + 1].textContent.trim();
                break;
            }
        }
        let categoria = "";
        for (const cls of cell.classList) {
            if (cls !== "cell" && categorias[cls]) {
                categoria = cls;
                break;
            }
        }
        return { numero, simbolo, nome, massa, categoria };
    }

    function showModal(cell) {
        const info = getElementInfo(cell);
        const num = parseInt(info.numero);
        const data = elementos[num] || {};

        overlay.querySelector(".modal-numero").textContent = info.numero;
        overlay.querySelector(".modal-simbolo").textContent = info.simbolo;
        overlay.querySelector(".modal-simbolo").style.color = cores[info.categoria] || "#c8d8ff";
        overlay.querySelector(".modal-nome").textContent = info.nome;
        overlay.querySelector(".modal-massa").textContent = info.massa;
        overlay.querySelector(".modal-categoria").textContent = categorias[info.categoria] || "";
        overlay.querySelector(".modal-categoria").style.color = cores[info.categoria] || "#c8d8ff";

        content.style.borderColor = (cores[info.categoria] || "rgba(200,216,255,0.15)") + "40";
        content.style.boxShadow = "0 0 40px rgba(0,0,0,0.5), 0 0 20px " + (cores[info.categoria] || "rgba(100,140,220,0.1)") + "30";

        document.getElementById("mi-ec").textContent = data.ec || "–";
        document.getElementById("mi-est").textContent = data.est || "–";
        document.getElementById("mi-pf").textContent = data.pf && data.pf !== "–" ? data.pf + " °C" : "–";
        document.getElementById("mi-pe").textContent = data.pe && data.pe !== "–" ? data.pe + " °C" : "–";
        document.getElementById("mi-d").textContent = data.d || "–";
        document.getElementById("mi-desc").textContent = data.desc || "–";
        document.getElementById("mi-ano").textContent = data.ano || "–";

        overlay.classList.add("active");
    }

    function hideModal() {
        overlay.classList.remove("active");
    }

    document.querySelectorAll("td.cell").forEach(cell => {
        cell.addEventListener("click", () => showModal(cell));
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) hideModal();
    });

    overlay.querySelector(".modal-close").addEventListener("click", hideModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") hideModal();
    });
});
