---
source: banking/japan-cooperative-banking-unified-federation-matrix
source_hash: c90c7bd6104ca1d5
lang: zh
status: machine
fidelity: ok
title: "日本合作银行统一联合会矩阵"
translated_at: 2026-05-30T18:10:53.991Z
---

# 日本合作银行统一联合会矩阵

## TL;DR

日本的「合作金融」通道并非单一体系。存在**五个各自独立、以联合会为核心的体系**,分属三个不同的省厅及三部不同的法规:**JA 银行**(497 家 JA + 31 家信农连 + [[JapanFG/norinchukin|農中]],依 農協法 / 農林中央金庫法,金融厅 + 农水省联合),**JF Marine Bank**(71 家 JF + 10 家 JF 信渔连 + [[JapanFG/norinchukin|農中]],依 水協法 / 農林中央金庫法,金融厅 + 农水省联合),**信用金庫**(254 家信用金库 + [[JapanFG/shinkin-central|信金中金]],依 信用金庫法,金融厅),**信用組合**(143 家信用合作社 + 全信組連,依 中協法 + 協金法,金融厅 + 都道府县),以及**労働金庫**(13 家劳动金库 + 労金連,依 労働金庫法,金融厅 + 厚劳省联合)。每个联合会都有自己的法规、监管机构组合、会员资格规则、中央机构角色、存款保险路径及日本银行接入。本矩阵将五者并列,以便在不把它们压平为「信用金库及其他」的前提下回答「哪个合作体系」的问题。

## Wiki route

This entry sits under [[banking/INDEX|banking index]] and is the cooperative-system counterpart to the licence-tier surface [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]]. The general framing of the lane is in [[banking/cooperative-banking-japan|Cooperative banking in Japan]]. The five member-population indices are [[banking/ja-bank-system-japan|JA Bank system]], [[banking/jf-marine-bank-system-japan|JF Marine Bank system]], [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]], [[banking/credit-cooperative-registry-japan|Japan credit cooperative registry]], and [[banking/rokin-bank-registry-japan|Japan rokin bank registry]]. The central institutions are [[JapanFG/norinchukin|農林中央金庫]], [[JapanFG/shinkin-central|信金中央金庫]], [[JapanFG/zenshin-kumi|全国信用協同組合連合会]], and [[JapanFG/rokin-renraku|労働金庫連合会]]. The JA non-credit federations sit at [[JapanFG/ja-zenchu|JA 全中]], [[JapanFG/ja-zen-noh|JA 全農]], and [[JapanFG/ja-kyosairen|JA 共済連]]; the JF non-credit federations are [[JapanFG/jf-shingyoren|JF 信漁連]] (federation-layer route) and [[JapanFG/jf-zengyoren|JF 全漁連]]. The deposit-insurance anchors are [[JapanFG/yokin-hoken-kiko|預金保険機構 (DICJ)]] for shinkin / shinkumi / rokin and the **農水産業協同組合貯金保険機構** parallel regime for JA / JF.

## 为何本矩阵重要

把「合作金融」当作一个类别,是日本金融体系测绘中最常见的单一错误。这五个体系不共享法规、不共享监管机构、不共享中央机构,也不共享存款保险路径。对一笔 [[banking/ja-bank-system-japan|JA]] 现金流的可信度判断必须从 農林中央金庫法 + 農協法 出发;对一笔 [[banking/shinkin-bank-registry-japan|shinkin]] 现金流的可信度判断必须从 信用金庫法 + 金融厅 中小・地域 指针出发。这两个问题由不同的省厅、不同的检查计划及不同的流动性后盾来回答。

具体而言,本矩阵之所以重要,是因为:

- **法规**控制几乎每一个其他字段(资本下限、治理、控股公司路径、日本银行接入);
- **监管机构组合**决定该机构归属于哪个省厅指针 / 检查周期(仅金融厅、金融厅 + 农水省、金融厅 + 厚劳省、金融厅 + 都道府县);
- **中央机构形态**决定该体系拥有的是 特殊法人([[JapanFG/norinchukin|農中]])还是会员所有的 協同組織 中央机构([[JapanFG/shinkin-central|信金中金]]、全信組連、[[JapanFG/rokin-renraku|労金連]]);
- **存款保险路径**不同 —— 信用金库 / 信用合作社 / 劳动金库 用 DICJ;JA / JF 用 農水産業貯金保険機構 —— 这影响披露中的储户保护表述;
- **日本银行对手方**是中央机构(而非成员合作社),因此流动性渠道图必须终止于联合会,而非本地合作社;
- **体系层级 AUM**(尤其是 [[JapanFG/norinchukin|農中]] ¥80-100万亿日元级及 [[JapanFG/shinkin-central|信金中金]] ¥40-50万亿日元级)使这些联合会跻身日本最大的机构投资者之列,与 [[banking/INDEX|megabank]] 的资产负债表并列,但使命截然不同。

本词条应与牌照层级矩阵 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]] 一并阅读 —— 牌照层级矩阵按牌照形态横向切分整个吸收存款版图,而本矩阵按联合会体系纵向切分合作通道。

## 跨体系比较表

| Dimension | JA Bank ([[banking/ja-bank-system-japan|農協系統]]) | JF Marine Bank ([[banking/jf-marine-bank-system-japan|漁協系統]]) | 信用金庫 ([[banking/shinkin-bank-registry-japan|shinkin]]) | 信用組合 ([[banking/credit-cooperative-registry-japan|shinkumi]]) | 労働金庫 ([[banking/rokin-bank-registry-japan|rokin]]) |
|---|---|---|---|---|---|
| **Statute (member layer)** | 農業協同組合法 (1947) | 水産業協同組合法 (1948) | 信用金庫法 (1951) | 中小企業等協同組合法 (1949) + 協同組合による金融事業に関する法律 (1949) | 労働金庫法 (1953) |
| **Statute (central layer)** | 農林中央金庫法 (1923 / 1986 / 2001) | 農林中央金庫法 (shared) | 信用金庫法 | 中小企業等協同組合法 + 協同組合による金融事業 | 労働金庫法 |
| **Primary supervisor** | FSA + 農林水産省 (joint) | FSA + 農林水産省 (joint) | FSA + Local Finance Bureau | FSA + 都道府県 (prefecture) | FSA + 厚生労働省 (joint) |
| **Member-cooperative count** | 497 JA (as of 2025-04 [[JapanFG/norinchukin\|農中]] disclosure) | 71 JF | 254 shinkin (FSA 令和7年11月6日) | 143 shinkumi (FSA 令和8年2月20日) | 13 rokin |
| **Federation / prefectural layer** | 31 prefectural JA Shinnoren (信連) | 10 JF Shingyoren (信漁連) | None at prefectural credit layer (shinkin go direct to 信金中金) | None at prefectural credit layer (shinkumi go direct to 全信組連) | None at prefectural credit layer (rokin go direct to 労金連) |
| **National central institution** | [[JapanFG/norinchukin\|農林中央金庫]] | [[JapanFG/norinchukin\|農林中央金庫]] (shared with JA) | [[JapanFG/shinkin-central\|信金中央金庫]] | [[JapanFG/zenshin-kumi\|全国信用協同組合連合会 (全信組連)]] | [[JapanFG/rokin-renraku\|労働金庫連合会 (労金連)]] |
| **Central legal form** | 特殊法人 (農林中央金庫法) | 特殊法人 (shared) | 協同組織金融機関 (member-owned) | 協同組織金融機関 (member-owned) | 協同組織金融機関 (member-owned) |
| **Member eligibility** | 農業協同組合 (agricultural co-op membership: farmers + associate members) | 漁業協同組合 (fishery co-op membership: fishers + associate members) | 業域 / 地域 / 職域 (resident, worker, or business in 営業地区) | 業域 / 地域 / 職域 (often tighter — single industry / region / occupation) | Labour unions, consumer-livelihood cooperatives, member-affiliated persons |
| **Deposit terminology** | 貯金 (chochiku / chokin) | 貯金 (shared with JA) | 預金 (yokin, like ordinary banks) | 預金 | 預金 |
| **Deposit insurance pathway** | 農水産業協同組合貯金保険機構 | 農水産業協同組合貯金保険機構 (shared) | [[JapanFG/yokin-hoken-kiko\|DICJ]] | [[JapanFG/yokin-hoken-kiko\|DICJ]] | [[JapanFG/yokin-hoken-kiko\|DICJ]] |
| **Insurance coverage limit** | ¥10m principal + interest (parallel to DICJ structure) | ¥10m + interest | ¥10m + interest (DICJ standard) | ¥10m + interest | ¥10m + interest |
| **Lending scope** | Member agricultural / household / business + non-member subject to caps | Member fishery / household / business + non-member subject to caps | Member SME / household + 50% non-member cap historically | Member SME / household (tighter member rules) | Member household + workplace finance (mortgage / education / life-event) |
| **BoJ counterparty** | [[JapanFG/norinchukin\|農中]] direct (system clears through 農中) | [[JapanFG/norinchukin\|農中]] direct (shared) | [[JapanFG/shinkin-central\|信金中金]] direct | 全信組連 direct | [[JapanFG/rokin-renraku\|労金連]] direct |
| **Holding-company route** | None (cooperative-system structure) | None | None | None | None |
| **Geographic constraint** | Local JA = municipality / region; Shinnoren = prefecture; 農中 = national | Local JF = port / region; Shingyoren = prefecture; 農中 = national | Statutory 営業地区 = municipality / prefecture | Statutory 営業地区 (often industry / community) | 13 regional rokin cover Japan together (no overlap) |
| **System-level AUM** | [[JapanFG/norinchukin\|農中]] ~¥83tn total assets (FY2024); system-wide JA 貯金 ~¥107tn (2025-03, JA Bank) | [[JapanFG/norinchukin\|農中]] shared; JF 貯金 considerably smaller scale | [[JapanFG/shinkin-central\|信金中金]] ~¥48tn (2025-03); sector deposits ~¥161tn (2024-03, 254 shinkin) | 全信組連 smaller scale; sector deposits ~¥24tn (2025-03) | [[JapanFG/rokin-renraku\|労金連]] 資金量 ¥6.2tn (2025-03 disclosure); sector deposits ~¥23tn (FY2024) |
| **Recent consolidation pattern** | Continuous JA mergers within prefectures; 497 figure has declined from > 1,000 over the past 25 years | JF mergers ongoing; 71 figure has declined from a much larger historical base | 254 down from ~400+ over past 25 years via shinkin-to-shinkin mergers | 143 down from much larger historical base; some inter-cooperative mergers | 13 stable since 1998-2003 regional consolidation pulled the prior 47-prefecture rokin map down to 13 regional rokin |
| **Non-credit sister federations** | [[JapanFG/ja-zenchu\|JA 全中]] (audit / representative), [[JapanFG/ja-zen-noh\|JA 全農]] (commercial), [[JapanFG/ja-kyosairen\|JA 共済連]] (mutual aid) | [[JapanFG/jf-zengyoren\|JF 全漁連]] (representative / commercial) | Industry body: [[JapanFG/zenshin-kyo\|全国信用金庫協会]] | Industry body: 全国信用組合中央協会 | Industry body: 全国労働金庫協会 |

## JA Bank — 農業協同組合系統 ([[banking/ja-bank-system-japan|JA Bank system]])

- **法规。** 農業協同組合法(1947年第 132 号法律),适用于本地 JA 及都道府县信农连信用业务;農林中央金庫法(当前整合后的重大修订 1986, 、2001),适用于 [[JapanFG/norinchukin|農林中央金庫]]。
- **监管机构。** 金融厅 + 農林水産省 联合 —— 这是一个主要监管机构**并非**仅金融厅的合作银行体系。实务监管在检查(信用业务 JA / 信农连由金融厅主导)与政策 / 合作社章程方面(由农水省主导)之间拆分。
- **层级数(2025-04, [[JapanFG/norinchukin|農中]] 披露)。** 本地层 497 家 JA、都道府县层 31 家信农连、全国层 1 家 [[JapanFG/norinchukin|農中]]。
- **中央机构。** [[JapanFG/norinchukin|農林中央金庫]] —— 農林中央金庫法 下的 特殊法人;不是 株式会社;非上市;由 JA Group、JF Group 及林业合作社团体通过 系統(系統団体出資)出资。作为体系层面的中央银行、体系层面的机构投资者(>¥80万亿日元 AUM 级)及合作体系的日本银行对手方运营。
- **会员类型。** 本地 JA 服务于农民会员(正組合員)及准会员(准組合員 —— 使用 JA 服务的非农居民)。信用业务 JA 充当合作金融的入口。
- **存款术语。** 使用 貯金 而非 預金,这可追溯到区别于《银行法》預金 的合作社法规术语。对用户而言功能等同。
- **存款保险。** 農水産業協同組合貯金保険機構(农业与渔业合作社储蓄保险机构)—— 一个独立于 [[JapanFG/yokin-hoken-kiko|DICJ]] 的平行保险载体,但按平行的 ¥10百万日元 + 利息原则设计。实务上的储户保护表述等同。
- **贷款范围。** 主要与会员相关(农业金融、会员家庭金融、区域中小企业),加上全国层的 [[JapanFG/norinchukin|農中]] 投资组合,后者按其使命是主要的固定收益 / 跨境投资者。
- **非信用姊妹联合会。** [[JapanFG/ja-zenchu|JA 全中]](审计、代表、农业政策倡导);[[JapanFG/ja-zen-noh|JA 全農]](商业联合会 —— 化肥 / 饲料 / 产品);[[JapanFG/ja-kyosairen|JA 共済連]](合作社互助保险)。
- **近期 / 值得注意的问题。** 2024-06 [[JapanFG/norinchukin|農中]] 宣布约 ¥1.2万亿日元的资本强化,与美国国债 / 结构化信贷未实现损失相关;2025 后续投资组合重组。这是 JA 银行通道在 2008 之后最重要的体系层级公开事件。

## JF Marine Bank — 漁業協同組合系統 ([[banking/jf-marine-bank-system-japan|JF Marine Bank system]])

- **法规。** 水産業協同組合法(1948年第 242 号法律),适用于信用业务 JF 及 JF 信渔连;農林中央金庫法(与 JA 共享),适用于 [[JapanFG/norinchukin|農中]]。
- **监管机构。** 金融厅 + 農林水産省 联合(与 JA 银行通道共享监管架构)。
- **层级数(2025-04, [[JapanFG/norinchukin|農中]] 披露)。** 本地层 71 家信用业务 JF、都道府县 / 区域层 10 家 [[JapanFG/jf-shingyoren|JF Shingyoren (信漁連)]]、全国层 1 家 [[JapanFG/norinchukin|農中]](与 JA 共享)。
- **中央机构。** 与 JA 相同的 [[JapanFG/norinchukin|農林中央金庫]]。JF 一侧的都道府县等值层为 [[JapanFG/jf-shingyoren|JF 信漁連]];非信用全国联合会为 [[JapanFG/jf-zengyoren|JF 全漁連]](销售、代表)。
- **会员类型。** 本地渔业合作社(按渔港 / 渔业区域组织)。会员为渔业家庭、渔业企业及渔业社区成员。
- **存款术语。** 貯金(与 JA 合作社术语共享)。
- **存款保险。** 農水産業協同組合貯金保険機構(与 JA 共享 —— 同一平行体系,而非 [[JapanFG/yokin-hoken-kiko|DICJ]])。
- **贷款范围。** 渔业经营金融、渔船融资、渔业家庭金融、加工 / 销售合作社金融,加上全国 [[JapanFG/norinchukin|農中]] 投资组合。
- **地理约束。** 本地 JF = 渔港 / 沿海区域;JF 信渔连 = 都道府县;[[JapanFG/norinchukin|農中]] = 全国。
- **为何是独立体系。** 尽管 JA 与 JF 在顶端共享 [[JapanFG/norinchukin|農中]],但法规不同(水協法 ≠ 農協法),JF 代表联合会 [[JapanFG/jf-zengyoren|JF 全漁連]] 不是 [[JapanFG/ja-zenchu|JA 全中]] 的一部分,且都道府县的 [[JapanFG/jf-shingyoren|JF 信漁連]] 在结构上有别于 JA 信农连。在运营分析中这两个体系不应被压平为「農林系統」。

## 信用金庫 — Shinkin system ([[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]])

- **法规。** 信用金庫法(1951年第 238 号法律;全面施行 1958)。
- **监管机构。** 金融厅 + 财务局(在金融厅 中小・地域金融機関 监督指针中关于 協同組織金融機関 的第 V 部分下)。并非农水省 / 厚劳省 联合监管体制 —— 信用金库完全处于金融厅合作金融通道内。
- **层级数。** 254 家持牌信用金库(金融厅 信用金庫免許一覧,截至 令和7年11月6日)+ 1 家 [[JapanFG/shinkin-central|信金中央金庫]] 中央机构。从 1990年代峰值(~400+)经由 信用金庫法 程序下持续的信用金库间合并而下降。
- **中央机构。** [[JapanFG/shinkin-central|信金中央金庫 (Shinkin Central Bank, SCB)]] —— 協同組織金融機関(由 254 家信用金库会员所有),而非 特殊法人。总资产 ~¥48万亿日元(2025-03末 披露)。作为体系流动性池、体系机构投资者载体、信用金库体系的日本银行对手方,以及 Shinkin Cash Service (SCS) ATM 网络的运营者。
- **会员类型。** 会员须在信用金库的法定 営業地区 内居住、工作或有业务。聚焦本地中小企业与家庭金融。
- **存款术语。** 預金(《银行法》术语,与 JA / JF 的 貯金 不同)。
- **存款保险。** [[JapanFG/yokin-hoken-kiko|DICJ]] —— 适用标准银行存款保险制度。
- **贷款范围。** 符合会员资格的本地中小企业、会员家庭、会员区域结算及消费金融。历史上的 50% 非会员贷款上限是结构性锚点(有除外条款)。
- **行业团体。** [[JapanFG/zenshin-kyo|全国信用金庫協会 (Zenshin-kyō)]] 负责行业代表。
- **近期 / 值得注意的问题。** 同样的 2021 《银行法》时代合作金融改革扩大了关联公司范围;持续的体系层面整合继续压缩 254 数量。数家个别信用金库已进入金融厅业务改善监管;体系稳定后盾通过 [[JapanFG/shinkin-central|信金中金]] 支持及 DICJ 处置工具实现。

## 信用組合 — Shinkumi system ([[banking/credit-cooperative-registry-japan|Japan credit cooperative registry]])

- **法规。** 中小企業等協同組合法(1949年第 181 号法律)加上 協同組合による金融事業に関する法律(1949年第 183 号法律)。这种合作信用业务双法规结构有别于信用金库的单法规结构。
- **监管机构。** 金融厅 + 都道府県(都道府县当局)。实务检查在体系监管上由金融厅主导,在合作社章程及会员资格方面由都道府县主导。金融厅与都道府县之间的双监管拆分有别于信用金库(仅金融厅)。
- **层级数。** 143 家持牌信用合作社(金融厅 信用組合認可一覧,截至 令和8年2月20日)+ 1 家 [[JapanFG/zenshin-kumi|全国信用協同組合連合会 (全信組連)]] 中央机构。经由合作社间合并从大得多的历史基数下降。
- **中央机构。** [[JapanFG/zenshin-kumi|全国信用協同組合連合会 (Zenshinkumiren / 全信組連)]] —— 協同組織金融機関(由 143 家信用合作社会员所有),在形态上与信用合作社体系的 [[JapanFG/shinkin-central|信金中金]] 平行。
- **会员类型。** 合作社会员按行业(業域 —— 单一行业 / 同业团体合作社)、区域(地域)或职业(職域)组织。会员资格比信用金库更严。包括行业特定合作社(如运输合作社、在日韩裔 / 华裔商业合作社、医生 / 牙医专业合作社)。
- **存款术语。** 預金。
- **存款保险。** [[JapanFG/yokin-hoken-kiko|DICJ]] 保障按标准条款适用。
- **贷款范围。** 仅限会员存款与会员贷款(无相当于信用金库 50% 规则的法定非会员上限许可)。实践中业务比信用金库更紧。
- **地理 / 职业约束。** 法定业务区域。许多信用合作社服务于特定职业或行业而非某一地理都道府县。
- **行业团体。** 全国信用組合中央協会(代表 / 行业团体,独立于 全信組連 这一中央银行实体)。

## 労働金庫 — Rokin system ([[banking/rokin-bank-registry-japan|Japan rokin bank registry]])

- **法规。** 労働金庫法(1953年第 227 号法律)。
- **监管机构。** 金融厅 + 厚生労働省(厚生劳动省)联合。厚劳省联合监管形态在吸收存款版图中独一无二 —— 没有其他合作金融通道有厚劳省监管。
- **层级数。** 13 家持牌区域劳动金库(金融厅 労働金庫免許一覧)+ 1 家 [[JapanFG/rokin-renraku|労働金庫連合会 (労金連 / Rokinren Bank)]] 中央机构。13家区域劳动金库地图(中央労金、近畿労金、東海労金、北海道労金、東北労金、新潟県労金、長野県労金、静岡県労金、北陸労金、中国労金、四国労金、九州労金、沖縄労金)经由 1998-2003 区域劳动金库合并潮取代了此前的 47都道府县劳动金库地图。
- **中央机构。** [[JapanFG/rokin-renraku|労働金庫連合会 (Rokinren Bank)]] —— 協同組織金融機関(由 13 家劳动金库会员所有),在形态上与 [[JapanFG/shinkin-central|信金中金]] / 全信組連 平行。資金量 ¥6.2万亿日元(2025-03 披露)及 出資金 ¥1,600億;金融机构代码 2950。
- **会员类型。** 会员为工会、生活協同組合(消费生活合作社)及隶属于会员组织的个人。个人储户通过其会员组织加入。
- **存款术语。** 預金。
- **存款保险。** [[JapanFG/yokin-hoken-kiko|DICJ]] 保障适用。
- **贷款范围。** 强烈偏向家庭 / 工人金融 —— 为工人会员提供住房贷款、教育贷款、汽车贷款、消费贷款及人生大事融资。商业贷款相对信用金库 / 信用合作社规模较小。
- **地理约束。** 每家区域劳动金库共同覆盖一个或多个都道府县作为一个区块(13 家劳动金库之间不重叠)。
- **为何由厚劳省联合监管。** 工会会员结构及职场 / 消费者保护范围使厚劳省成为与金融厅并列的天然联合监管机构。

## 中央机构比较(顶端层)

| Field | [[JapanFG/norinchukin\|農中]] (JA + JF) | [[JapanFG/shinkin-central\|信金中金]] | [[JapanFG/zenshin-kumi\|全信組連]] | [[JapanFG/rokin-renraku\|労金連]] |
|---|---|---|---|---|
| Statute | 農林中央金庫法 | 信用金庫法 | 中協法 + 協金法 | 労働金庫法 |
| Legal form | 特殊法人 | 協同組織 (member-owned) | 協同組織 | 協同組織 |
| Founded | 1923 (current law 1986) | 1950 (改組 2000) | Mid-1950s (post-cooperative law) | 1955 |
| Members | 系統団体出資 (JA Group + JF Group + forestry) | 254 shinkin | 143 shinkumi | 13 rokin |
| Total assets class | ~¥83tn (FY2024) | ~¥48tn (2025-03) | Smaller; not publicly broken out at this granularity | ¥6.2tn 資金量 (2025-03) |
| BoJ counterparty | Direct | Direct | Direct | Direct |
| Overseas branches | NY / London / Singapore | NY / London | None at this scale | None |
| Major investment role | Global fixed income / structured credit (high-profile losses 2008, 2024) | Domestic + foreign bonds / equities / alternatives | Smaller; system support focus | System support + member-finance support; smaller investment book |
| Industry-body sibling | [[JapanFG/ja-zenchu\|JA 全中]] / [[JapanFG/jf-zengyoren\|JF 全漁連]] | [[JapanFG/zenshin-kyo\|全信協]] | 全信中協 | 全国労働金庫協会 |

## 存款保险路径比较

| Pathway | Institution covered | Statute | Coverage |
|---|---|---|---|
| [[JapanFG/yokin-hoken-kiko\|DICJ]] | Shinkin, shinkumi, rokin, ordinary banks, trust banks, net banks, Japan Post Bank | 預金保険法 | ¥10m principal + interest; 決済用預金 fully protected |
| 農水産業協同組合貯金保険機構 (separate parallel system) | Local JA, JA Shinnoren, local JF, JF Shingyoren, [[JapanFG/norinchukin\|農中]] | 農水産業協同組合貯金保険法 | ¥10m + interest (parallel design, separate fund) |
| Home-country regime | Foreign-bank branches (Banking Act Chapter IX) | Not DICJ; not JA/JF system | Depositors rely on home-country protection; differs by bank |

之所以存在双路径设计,是因为农业 / 渔业合作社体系使用 貯金(合作社法规术语)而非 預金(《银行法》术语),且历史上的机构设计将合作社一侧的保险体系与银行一侧的 DICJ 分离。保护经济学等同(¥10m + 利息),但法律机制、基金及监管当局各不相同。

## 体系层级 AUM 与整合模式

| System | Central-institution AUM (approx) | Sector deposits (approx) | Consolidation trajectory |
|---|---|---|---|
| JA Bank | [[JapanFG/norinchukin\|農中]] ~¥83tn (FY2024) | System-wide 貯金 ~¥107tn (2025-03) | Local JA: > 1,000 → 497 (continuous merger) |
| JF Marine Bank | Shared with JA via [[JapanFG/norinchukin\|農中]] | System-wide 貯金 considerably smaller than JA | Local JF: hundreds → 71 (continuous merger) |
| 信用金庫 | [[JapanFG/shinkin-central\|信金中金]] ~¥48tn (2025-03) | ~¥161tn (2024-03, 254 shinkin) | 254 (down from ~400+ over 25 years) |
| 信用組合 | 全信組連 — smaller scale, not publicly broken out at this granularity | ~¥24tn (2025-03) | 143 (continuous cooperative-merger pattern) |
| 労働金庫 | [[JapanFG/rokin-renraku\|労金連]] 資金量 ¥6.2tn (2025-03) | ~¥23tn (FY2024) | 13 stable since 1998-2003 regional consolidation |

按中央机构 AUM 及行业存款两项衡量,最大的两个是 JA 银行([[JapanFG/norinchukin|農中]] + JA 貯金)与信用金库([[JapanFG/shinkin-central|信金中金]] + 行业存款)。其余三个作为体系总量则明显更小。

## 如何阅读本矩阵

1. 从**法规行**开始 —— 若问题涉及合作金融实体,它决定几乎每一个其他字段。
2. 接着读**监管机构行** —— 仅金融厅(信用金库)、金融厅 + 都道府县(信用合作社)、金融厅 + 厚劳省 联合(劳动金库)、金融厅 + 农水省 联合(JA / JF)—— 它决定适用哪个检查 / 指针体制。
3. 检查**存款术语行**。貯金 意味着 JA / JF(合作社法规),預金 意味着信用金库 / 信用合作社 / 劳动金库(《银行法》平行)。
4. 检查**存款保险路径**。JA / JF 使用 農水産業 合作社路径;信用金库 / 信用合作社 / 劳动金库 使用 [[JapanFG/yokin-hoken-kiko|DICJ]]。
5. 检查**中央机构**。每个体系通过其自身的中央机构清算、结算并接入日本银行 —— 绝不直接通过成员合作社。
6. 检查**非信用联合会姊妹机构**。JA 尤其拥有异常庞大的非银行联合会界面([[JapanFG/ja-zenchu|全中]]、[[JapanFG/ja-zen-noh|全農]]、[[JapanFG/ja-kyosairen|共済連]]),不应被压平为「JA 银行」。

## 监管机构组合解读

| System | FSA role | Co-supervisor | Cooperative-charter authority | Inspection cycle |
|---|---|---|---|---|
| JA Bank | Primary inspection of credit business | 農林水産省 (cooperative-policy + agricultural-charter side) | 農水省 + 都道府県 for cooperative-society aspects | FSA cooperative-finance inspection programme; MAFF involved on cooperative-charter aspects |
| JF Marine Bank | Primary inspection of credit business | 農林水産省 (fisheries-policy + fisheries-charter side) | 農水省 + 都道府県 for cooperative-society aspects | Parallel to JA Bank supervision regime |
| 信用金庫 | Primary inspection (Local Finance Bureau) | None outside FSA cooperative-finance line | FSA | Standard cooperative-finance inspection cycle |
| 信用組合 | Primary inspection (Local Finance Bureau) | 都道府県 (prefectural authority for the cooperative-charter and member-eligibility) | FSA + 都道府県 | Joint supervision split |
| 労働金庫 | Primary inspection | 厚生労働省 (workplace / labour-union side) | 厚労省 | FSA inspection programme overlaid with MHLW workplace / consumer-protection supervision |

监管机构组合行决定哪些省厅指针更新流入各体系。金融厅 中小・地域金融機関 监督指针的变化会在银行监管层影响全部五者;農林水産省 合作政策的变化会影响 JA / JF 而非信用金库 / 信用合作社 / 劳动金库;厚生労働省 劳动政策的变化可专门影响劳动金库。

## 控股公司路径 —— 为何五个合作体系无一使用

五个合作金融体系无一使用《银行法》下对普通 / 地方 / 第二地方银行广泛开放的**银行控股公司**路径。原因是结构性的:

1. 《银行法》控股公司框架适用于《银行法》持牌银行(普通銀行)。五部合作银行法规(信用金庫法、中小企業等協同組合法 + 協金法、労働金庫法、農林中央金庫法、農協法、水協法)并不包含等同的控股公司许可框架。
2. 合作金融机构是**会员所有**(出資金 / 協同組織),而非股东所有。标准控股公司结构假定的是股份制母公司。
3. 中央机构模式(以联合会为核心)已经提供了银行控股公司本会为多银行集团提供的整合、流动性池及体系战略功能。

这意味着合作体系整合必须在各体系**内部**发生,通过合作社间合并(如 信用金庫法 程序下的信用金库间合并、農協法 下的 JA 间合并)、联合会重组(如 JA 信农连数量缩减)或中央机构重组进行。跨体系合并(如 信用金库 → 地方银行,或 信用金库 → 信用合作社)需要牌照层级变更,而非控股公司操作。

牌照层级矩阵 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]] 明确标示了这一点:「控股公司」行对所有合作层级(信用金库、信用合作社、劳动金库、JA / JF / 農中)显示**「No」**。作为对比,地方银行与第二地方银行广泛使用了控股公司路径 —— 参见 [[banking/japan-regional-bank-m-a-consolidation-family-tree-matrix|Japan regional bank M&A consolidation family-tree matrix]]。

## 跨体系重叠与不重叠

| Question | Answer | Notes |
|---|---|---|
| Do JA and JF share members? | Some overlap at the individual household level (a household can be both farmer + fisher) but the cooperative entities are distinct | Local JA ≠ local JF; the credit-business charter is separate |
| Do shinkin and shinkumi compete? | Yes, but the franchises are structured around different member-eligibility tests | Shinkin has a wider 営業地区 with the 50% non-member cap; shinkumi has a tighter (often industry / occupational) member rule |
| Do rokin compete with shinkin / shinkumi? | Limited — rokin members are organized through labour unions / consumer cooperatives, which is a different channel | Rokin's lending mix (mortgage / education / consumer / life-event) overlaps with shinkin / shinkumi household-finance, but the customer-acquisition route differs |
| Do regional banks compete with cooperative-finance? | Yes — regional and second-regional banks have overlapping SME / household-finance markets in their prefectures | Regional banks operate under Banking Act + standard holding-company framework, but the franchise overlaps. See [[banking/regional-bank-consolidation-pattern]] |
| Do megabanks compete with cooperative-finance? | Limited — megabanks are corporate / institutional / urban consumer focused | Cooperative-finance institutions are member / regional / local SME focused |
| Are foreign-bank branches in the cooperative lane? | No — foreign branches are entirely outside the cooperative-banking statutes | See [[banking/foreign-bank-japan-retreat]] and [[banking/japan-foreign-bank-retreat-refocus-timeline-matrix]] |

## 近期合作金融改革 —— 2021 《银行法》时代的扩展

2021 《银行法》改正范围扩大了银行关联业务的范围(数字子公司、区域振兴投资、咨询子公司)。合作金融法规在相同的金融厅改革方向下被平行更新:

- **信用金庫法** 修订扩大了关联业务范围。
- **中小企業等協同組合法 + 協金法** 修订使合作信用业务与更广泛的合作金融改革方向对齐。
- **労働金庫法** 修订包括平行的关联业务范围扩展。
- **農林中央金庫法** 围绕资本结构 / 监管资本灵活性的变化。
- **農協法 / 水協法** 的变化沿循 2015 农业合作社改革方向(JA 全中 的法定角色被收回)及后续立法工作。

这一 2021时代的改革使合作金融机构更容易投资于区域振兴、咨询子公司及数字金融子公司 —— 但**并未**开放银行控股公司路径,也未改变存款保险路径的分立。

## 日本银行对手方机制

| System | BoJ counterparty | Settlement chain | Why federation-only |
|---|---|---|---|
| JA Bank | [[JapanFG/norinchukin\|農林中央金庫]] | Local JA → Shinnoren → [[JapanFG/norinchukin\|農中]] → BoJ | Local JA / Shinnoren do not hold BoJ current accounts |
| JF Marine Bank | [[JapanFG/norinchukin\|農林中央金庫]] (shared with JA) | Local JF → JF Shingyoren → [[JapanFG/norinchukin\|農中]] → BoJ | Same federation-only access pattern |
| 信用金庫 | [[JapanFG/shinkin-central\|信金中央金庫]] | Shinkin → [[JapanFG/shinkin-central\|信金中金]] → BoJ | Individual shinkin clear through 信金中金 |
| 信用組合 | [[JapanFG/zenshin-kumi\|全信組連]] | Shinkumi → 全信組連 → BoJ | Individual shinkumi clear through 全信組連 |
| 労働金庫 | [[JapanFG/rokin-renraku\|労金連]] | Rokin → 労金連 → BoJ | Individual rokin clear through 労金連 |

仅限联合会的日本银行对手方模式是合作金融法规设计最重要的单一运营后果。它意味着任何个别合作机构的流动性压力都通过联合会进行中介,而非通过直接的日本银行市场操作。四家中央机构([[JapanFG/norinchukin|農中]]、[[JapanFG/shinkin-central|信金中金]]、[[JapanFG/zenshin-kumi|全信組連]]、[[JapanFG/rokin-renraku|労金連]])共同构成合作金融通道进入日本银行支付 / 清算基础设施的运营入口。

## 边界案例与注意事项

- **JA Bank ≠ [[JapanFG/norinchukin|農中]]。** [[JapanFG/norinchukin|農林中央金庫]] 是 JA 银行体系的中央机构,但作为体系的 JA 银行还涵盖本地 JA + 信农连层。把 [[JapanFG/norinchukin|農中]] 当作整个 JA 银行体系是最常见的错误。
- **JF Marine Bank 共享 [[JapanFG/norinchukin|農中]] 但是独立体系。** 法规是 水協法 而非 農協法;代表联合会是 [[JapanFG/jf-zengyoren|JF 全漁連]] 而非 [[JapanFG/ja-zenchu|JA 全中]]。视为恰好共享中央机构的姊妹体系。
- **信用金库 ≠ 信用合作社。** 两者都是 協同組織 合作金融机构,但法规、中央机构、监管机构组合及会员资格规则全都不同。混淆它们会把 [[banking/shinkin-bank-registry-japan|254-shinkin]] 与 [[banking/credit-cooperative-registry-japan|143-shinkumi]] 两个群体压平为一个错误类别。
- **劳动金库 ≠ 信用金库 / 信用合作社。** 劳动金库具有独特的工会 / 消费合作社会员结构、法规(労働金庫法)及厚劳省联合监管。13家劳动金库地图在结构上也有别于 254家信用金库 / 143家信用合作社的长尾群体。
- **JA 非信用联合会不是银行实体。** [[JapanFG/ja-zenchu|JA 全中]] 是 一般社団法人(代表 / 审计机构),[[JapanFG/ja-zen-noh|JA 全農]] 是商业联合会(化肥 / 饲料 / 农产品),[[JapanFG/ja-kyosairen|JA 共済連]] 是合作社互助保险联合会。只有 [[JapanFG/norinchukin|農中]] 才是银行一侧的中央机构。不要把它们列入吸收存款版图。
- **林业合作社(JForest / 森林組合)。** [[JapanFG/norinchukin|農中]] 也是林业合作社体系(JForest)的中央机构,但 JForest 没有可与 JA / JF 比拟的、具有有意义规模的信用业务联合会层。JForest 是 [[JapanFG/norinchukin|農中]] 系統 使命的第 4条合作社支腿,而非本矩阵上的第 5条合作金融通道。
- **行业团体对比中央机构。** 每个体系既有会员银行中央机构(银行 / 资金 / 投资 / 清算),又有行业团体(代表 / 政策 / 培训)。信用金库的这两者是 [[JapanFG/shinkin-central|信金中金]] 对比 [[JapanFG/zenshin-kyo|全信協]]。信用合作社的这两者是 [[JapanFG/zenshin-kumi|全信組連]] 对比 全信中協。劳动金库的这两者是 [[JapanFG/rokin-renraku|労金連]] 对比 全国労働金庫協会。不要混淆二者。
- **本地 JA / 信农连 / 信渔连 数量随时间变动。** 上文引用的 497 / 31 / 71 / 10 层级数反映 2025-04 [[JapanFG/norinchukin|農中]] 披露;长期整合继续压缩这些数字。
- **AUM 数字。** 本矩阵中的体系总量 AUM 与 資金量 数字是公开领域的汇总锚点;精确申报请查阅机构特定的披露页面及 農中 / 信金中金 / 労金連 的 ディスクロージャー誌。

## Related

- [[banking/INDEX|banking index]]
- [[banking/cooperative-banking-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/ja-bank-system-japan]]
- [[banking/jf-marine-bank-system-japan]]
- [[banking/shinkin-bank-registry-japan]]
- [[banking/credit-cooperative-registry-japan]]
- [[banking/rokin-bank-registry-japan]]
- [[banking/regional-bank-consolidation-pattern]]
- [[JapanFG/norinchukin]]
- [[JapanFG/shinkin-central]]
- [[JapanFG/zenshin-kumi]]
- [[JapanFG/rokin-renraku]]
- [[JapanFG/ja-zenchu]]
- [[JapanFG/ja-zen-noh]]
- [[JapanFG/ja-kyosairen]]
- [[JapanFG/jf-shingyoren]]
- [[JapanFG/jf-zengyoren]]
- [[JapanFG/zenshin-kyo]]
- [[JapanFG/yokin-hoken-kiko]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: 信用金庫免許一覧 (shinkin license registry).
- FSA: 信用組合認可一覧 (credit cooperative authorization registry).
- FSA: 労働金庫免許一覧 (rokin license registry).
- FSA: 中小・地域金融機関向けの総合的な監督指針, Part V on 協同組織金融機関.
- 信用金庫法 / 中小企業等協同組合法 / 協同組合による金融事業に関する法律 / 労働金庫法 / 農業協同組合法 / 水産業協同組合法 / 農林中央金庫法 (Japanese Law Translation portal).
- 全国信用金庫協会: 信用金庫の制度.
- [[JapanFG/norinchukin|農林中央金庫]] 公式: 農林中央金庫の特徴 (JA Bank / JF Marine Bank layer counts as of 2025-04).
- JA Bank: JAバンクのしくみ / JAバンクシステム.
- JF Marine Bank: 基本方針 / システム概要.
- [[JapanFG/shinkin-central|信金中央金庫]] ディスクロージャー誌.
- [[JapanFG/rokin-renraku|労働金庫連合会]] 公式プロフィール (2025-03 disclosure).
- JA Group Factbook (org.ja-group.jp).
- DICJ: Deposit Insurance Corporation of Japan public site.
- 農水産業協同組合貯金保険機構 (parallel cooperative-finance insurance regime).
- 農林中央金庫 決算のお知らせ (総資産 ~¥83兆, FY2024): https://www.nochubank.or.jp/ir/results/
- JAバンク 貯貸金動向 (JA 貯金残高 ~¥107兆, 2025-03末): https://www.jabank.org/about/jyokyo/
- 信金中金 地域・中小企業研究所 全国信用金庫主要勘定状況 (預金残高 ¥161.1兆, 2024-03末; 信金中金 総資産 ~¥48兆, 2025-03): https://www.scbri.jp/reports/.assets/finance_20240502.pdf
- 全国信用組合中央協会 信用組合業界概況 (預金積金 ¥23.9兆, 2025-03末): https://www.shinyokumiai.or.jp/credit_cooperative/outline.html
- 全国労働金庫協会 数字で知るろうきん / 2024年度決算概況 (預金 ¥23.0兆, FY2024): https://all.rokin.or.jp/about/accounts.html
