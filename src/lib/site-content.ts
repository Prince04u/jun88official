export type PageKind = "category" | "article" | "account" | "promo" | "info";

export interface ContentList {
  title?: string;
  items: string[];
}
export interface ContentTable {
  title?: string;
  headers: string[];
  rows: string[][];
}
export interface ProsCons {
  pros: string[];
  cons: string[];
}
export interface Section {
  heading: string;
  paragraphs: string[];
  lists?: ContentList[];
  table?: ContentTable;
  prosCons?: ProsCons;
  quote?: string;
}
export interface PageDef {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  kind: PageKind;
  category: string;
  intro: string[];
  highlights: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: string[];
}

const updated = "10/06/2026";

const p = (...lines: string[]) => lines.join(" ");

export const PAGES: PageDef[] = [
  buildHome(),
  // Core sections
  page("casino", "Casino trực tuyến", "Casino", "casino"),
  page("casino-jun88", "Casino JUN88", "Casino", "casino"),
  page("the-thao", "Cá cược Thể thao", "Thể thao", "the-thao"),
  page("esport", "Cá cược Esport", "Thể thao", "esport"),
  page("xo-so", "Xổ số trực tuyến", "Xổ số", "xo-so"),
  page("no-hu", "Nổ hũ Jackpot", "Slot", "no-hu"),
  page("poker-jun88", "Poker JUN88", "Poker", "poker"),
  page("poker-online", "Poker Online", "Poker", "poker"),
  page("blackjack-jun88", "Blackjack JUN88", "Casino", "blackjack"),
  page("baccarat-jun88", "Baccarat JUN88", "Casino", "baccarat"),
  page("baccarat-online", "Baccarat Online", "Casino", "baccarat"),
  page("roulette-jun88", "Roulette JUN88", "Casino", "roulette"),
  page("tai-xiu", "Tài Xỉu", "Tài Xỉu", "tai-xiu"),
  page("tai-xiu-jun88", "Tài Xỉu JUN88", "Tài Xỉu", "tai-xiu"),
  page("xoc-dia-jun88", "Xóc Đĩa JUN88", "Bài dân gian", "xoc-dia"),
  page("xoc-dia-bip", "Cảnh báo Xóc Đĩa bịp", "Bài dân gian", "xoc-dia"),
  page("rong-ho-jun88", "Rồng Hổ JUN88", "Casino", "rong-ho"),
  page("rong-ho-online", "Rồng Hổ Online", "Casino", "rong-ho"),
  // Account
  page("dang-ky-jun88", "Đăng ký JUN88", "Tài khoản", "tai-khoan", "account"),
  page("dang-nhap-jun88", "Đăng nhập JUN88", "Tài khoản", "tai-khoan", "account"),
  page("nap-tien-jun88", "Nạp tiền JUN88", "Tài khoản", "tai-khoan", "account"),
  page("rut-tien-jun88", "Rút tiền JUN88", "Tài khoản", "tai-khoan", "account"),
  page("tai-app-jun88", "Tải App JUN88", "Tài khoản", "tai-khoan", "account"),
  // Promotion
  page("khuyen-mai", "Khuyến mãi JUN888", "Ưu đãi", "khuyen-mai", "promo"),
  page("uu-dai", "Ưu đãi thành viên", "Ưu đãi", "khuyen-mai", "promo"),
  page("su-kien", "Sự kiện đặc biệt", "Ưu đãi", "khuyen-mai", "promo"),
  // Info
  page("gioi-thieu", "Giới thiệu JUN888", "Về chúng tôi", "info", "info"),
  page("lien-he-jun88", "Liên hệ JUN88", "Về chúng tôi", "info", "info"),
  page("lien-he-voi-chung-toi", "Liên hệ với chúng tôi", "Về chúng tôi", "info", "info"),
  page("van-hoa-doanh-nghiep", "Văn hóa doanh nghiệp", "Về chúng tôi", "info", "info"),
  page("tuyen-dung", "Tuyển dụng JUN888", "Về chúng tôi", "info", "info"),
  page("dieu-khoan-dich-vu", "Điều khoản dịch vụ", "Pháp lý", "info", "info"),
  page("chinh-sach-quyen-rieng-tu", "Chính sách quyền riêng tư", "Pháp lý", "info", "info"),
  // Hub articles
  page("giai-den-lo-de", "Giải đen lô đề", "Xổ số", "xo-so"),
  page("bao-lo-la-gi", "Bao lô là gì?", "Xổ số", "xo-so"),
  page("cach-tinh-diem-lo", "Cách tính điểm lô", "Xổ số", "xo-so"),
  page("rake-la-gi-trong-poker", "Rake là gì trong Poker?", "Poker", "poker"),
];

function buildHome(): PageDef {
  return {
    slug: "",
    title: "JUN888 — Cổng thông tin Casino, Thể thao, Xổ số & Poker hàng đầu Việt Nam",
    h1: "Cổng thông tin JUN888",
    description:
      "JUN888 — Cẩm nang đầy đủ về casino trực tuyến, cá cược thể thao, xổ số, poker, bài cào và đánh giá nhà cái uy tín dành cho người chơi Việt Nam năm 2026.",
    keywords: ["jun888", "jun88", "casino trực tuyến", "cá cược thể thao", "xổ số online", "poker việt nam"],
    kind: "category",
    category: "Trang chủ",
    intro: [
      "JUN888 là cổng thông tin tổng hợp về sòng bài trực tuyến, cá cược thể thao, xổ số, poker và các trò chơi bài dân gian dành riêng cho cộng đồng người chơi Việt Nam.",
      "Chúng tôi mang đến hướng dẫn chi tiết, mẹo chơi thực chiến, đánh giá nhà cái khách quan và cập nhật khuyến mãi mới nhất giúp người chơi đưa ra quyết định an toàn, có trách nhiệm.",
    ],
    highlights: [],
    sections: [],
    faqs: [],
    related: [],
  };
}

function page(
  slug: string,
  shortTitle: string,
  category: string,
  topic: string,
  kind: PageKind = "article"
): PageDef {
  const h1 = shortTitle;
  const title = `${shortTitle} 2026 — Hướng dẫn chi tiết & đánh giá | JUN888`;
  const description = makeDescription(shortTitle, kind);
  return {
    slug,
    title,
    h1,
    description,
    keywords: makeKeywords(shortTitle, topic),
    kind,
    category,
    intro: makeIntro(shortTitle, topic, kind),
    highlights: makeHighlights(shortTitle, topic, kind),
    sections: makeSections(shortTitle, topic, kind),
    faqs: makeFaqs(shortTitle, topic, kind),
    related: [],
  };
}

function makeDescription(name: string, kind: PageKind): string {
  if (kind === "account")
    return `Hướng dẫn ${name.toLowerCase()} chi tiết từng bước năm 2026: quy trình, mẹo bảo mật, xử lý lỗi thường gặp và câu hỏi thường gặp. Cập nhật mới nhất từ JUN888.`;
  if (kind === "promo")
    return `Tổng hợp ${name.toLowerCase()} mới nhất 2026: điều kiện, vòng cược, cách kích hoạt và mẹo tối ưu giá trị thưởng. Cập nhật bởi ban biên tập JUN888.`;
  if (kind === "info")
    return `${name} — Thông tin chính thức, minh bạch về JUN888. Cam kết, quy định và hướng dẫn liên hệ dành cho người chơi.`;
  return `${name} 2026: luật chơi đầy đủ, chiến thuật thực chiến, mẹo quản lý vốn, bảng tỷ lệ thưởng và đánh giá độ uy tín. Cẩm nang chi tiết bởi JUN888.`;
}

function makeKeywords(name: string, topic: string): string[] {
  const base = name.toLowerCase();
  return [base, `${base} 2026`, `${topic} online`, `hướng dẫn ${base}`, `mẹo ${topic}`, "jun88", "jun888"];
}

function makeIntro(name: string, topic: string, kind: PageKind): string[] {
  if (kind === "account") {
    return [
      `${name} là một trong những thao tác cơ bản mà mọi thành viên cần thực hiện thành thạo khi tham gia nền tảng giải trí trực tuyến năm 2026.`,
      `Bài viết hướng dẫn từng bước thực hiện ${name.toLowerCase()} một cách nhanh chóng và an toàn, kèm theo các lưu ý quan trọng giúp bạn tránh được những sai sót thường gặp và đảm bảo tài khoản luôn hoạt động ổn định.`,
      `Ngoài ra, chúng tôi cũng giải đáp những thắc mắc phổ biến nhất, phân tích các trường hợp xử lý lỗi và đưa ra mẹo bảo mật chuyên sâu để bạn an tâm trải nghiệm.`,
    ];
  }
  if (kind === "promo") {
    return [
      `Chuyên mục ${name.toLowerCase()} tổng hợp toàn bộ chương trình ưu đãi mới và hấp dẫn nhất dành cho thành viên trong năm 2026, từ thưởng chào mừng đến hoàn trả VIP.`,
      `Mỗi chương trình đều được phân tích kỹ lưỡng về điều kiện tham gia, mức thưởng cụ thể, vòng cược yêu cầu và thời gian áp dụng để bạn tận dụng giá trị tối đa.`,
      `Đội ngũ biên tập của JUN888 cập nhật thông tin liên tục, đối chiếu với điều khoản chính thức và đưa ra các mẹo thực chiến giúp khuyến mãi trở thành công cụ tăng vốn hiệu quả thay vì cạm bẫy.`,
    ];
  }
  if (kind === "info") {
    return [
      `Trang ${name} cung cấp những thông tin chính thức, đầy đủ và minh bạch về hoạt động của JUN888 dành cho người dùng Việt Nam.`,
      `Chúng tôi cam kết cung cấp dịch vụ trung thực, tôn trọng quyền lợi người dùng, tuân thủ các quy định pháp luật hiện hành và đề cao văn hoá chơi có trách nhiệm.`,
      `Mọi nội dung được kiểm chứng bởi đội ngũ chuyên trách và cập nhật định kỳ để đảm bảo phản ánh đúng thực tế vận hành.`,
    ];
  }
  return [
    `${name} là một trong những chủ đề được cộng đồng người chơi Việt Nam quan tâm bậc nhất trong năm 2026, thu hút hàng triệu lượt tìm kiếm mỗi tháng.`,
    `Bài viết này bóc tách chi tiết luật chơi, các thuật ngữ chuyên ngành, kinh nghiệm thực chiến và những chiến thuật ${topic} đã được kiểm chứng giúp bạn nắm chắc kiến thức trước khi đặt cược bằng tiền thật.`,
    `Toàn bộ nội dung được biên soạn bởi đội ngũ chuyên gia của JUN888 với hơn 10 năm kinh nghiệm trong lĩnh vực giải trí trực tuyến, đối chiếu với nhiều nguồn uy tín quốc tế.`,
    `Dù bạn là người mới hay đã quen thuộc với ${topic}, bạn vẫn sẽ tìm thấy những thông tin giá trị giúp nâng cao kỹ năng và bảo vệ tài chính cá nhân.`,
  ];
}

function makeHighlights(name: string, topic: string, kind: PageKind): string[] {
  if (kind === "account")
    return [
      `Hướng dẫn ${name.toLowerCase()} đầy đủ chỉ trong dưới 5 phút`,
      "Mẹo bảo mật chuyên sâu giúp tránh rủi ro mất tài khoản",
      "Xử lý nhanh các lỗi thường gặp khi thao tác",
      "Hỗ trợ 24/7 qua chat, hotline, email",
    ];
  if (kind === "promo")
    return [
      "Cập nhật mới nhất 2026, đối chiếu với điều khoản chính thức",
      "Phân tích chi tiết vòng cược và điều kiện rút thưởng",
      "Mẹo tối ưu giá trị thưởng cho cả người mới và VIP",
      "Cảnh báo các điều khoản dễ bỏ qua",
    ];
  if (kind === "info")
    return [
      "Thông tin chính thức từ JUN888",
      "Cam kết minh bạch và bảo mật người dùng",
      "Tuân thủ pháp luật Việt Nam",
      "Hỗ trợ khách hàng tận tâm",
    ];
  return [
    `Luật chơi ${topic} đầy đủ từ cơ bản tới nâng cao`,
    "Bảng tỷ lệ trả thưởng, xác suất chi tiết",
    "Chiến thuật quản lý vốn được kiểm chứng",
    "Đánh giá độ uy tín các nền tảng phổ biến",
    "Mẹo thực chiến từ chuyên gia 10+ năm",
  ];
}

function makeSections(name: string, topic: string, kind: PageKind): Section[] {
  if (kind === "account") return accountSections(name);
  if (kind === "promo") return promoSections(name);
  if (kind === "info") return infoSections(name);
  return articleSections(name, topic);
}

function accountSections(name: string): Section[] {
  const low = name.toLowerCase();
  return [
    {
      heading: `Tổng quan về ${name}`,
      paragraphs: [
        `${name} là thao tác bắt buộc đối với mọi thành viên muốn trải nghiệm trọn vẹn các sản phẩm cá cược trực tuyến tại nền tảng. Quy trình được thiết kế đơn giản, thân thiện với cả người mới bắt đầu, đồng thời vẫn đảm bảo các tiêu chuẩn bảo mật khắt khe nhất.`,
        `Toàn bộ thao tác có thể thực hiện ngay trên trình duyệt web hoặc ứng dụng di động, không yêu cầu cài đặt phần mềm phức tạp. Thời gian xử lý trung bình chỉ từ vài phút và bạn sẽ nhận được xác nhận tức thì qua SMS hoặc email.`,
        `Tuy đơn giản, nhưng việc tuân thủ đúng quy trình và chuẩn bị đầy đủ thông tin sẽ giúp bạn tránh được các lỗi xác minh không đáng có, đồng thời bảo vệ tài khoản khỏi nguy cơ bị khoá do nghi vấn gian lận.`,
      ],
      lists: [
        {
          title: `Bạn cần chuẩn bị gì trước khi ${low}?`,
          items: [
            "Thiết bị có kết nối Internet ổn định (4G/5G/Wifi)",
            "Số điện thoại di động đang sử dụng để nhận OTP",
            "Email cá nhân (khuyến nghị Gmail vì tốc độ ổn định)",
            "Giấy tờ tuỳ thân hợp lệ (CCCD, hộ chiếu) để xác minh khi cần",
            "Tài khoản ngân hàng chính chủ trùng tên với tài khoản đăng ký",
          ],
        },
      ],
    },
    {
      heading: `Hướng dẫn ${low} chi tiết từng bước`,
      paragraphs: [
        `Quy trình ${low} gồm 4 bước cốt lõi, mỗi bước chỉ mất khoảng 30 giây nếu bạn đã chuẩn bị sẵn thông tin cần thiết. Hãy đọc kỹ từng bước và làm theo đúng thứ tự để đạt kết quả nhanh nhất.`,
      ],
      lists: [
        {
          items: [
            "Bước 1: Truy cập trang chủ chính thức và chọn mục tương ứng trong menu tài khoản (góc trên bên phải).",
            "Bước 2: Điền đầy đủ thông tin theo biểu mẫu — đảm bảo trùng khớp tuyệt đối với giấy tờ tuỳ thân.",
            "Bước 3: Xác minh bảo mật bằng mã OTP gửi tới số điện thoại hoặc email đã đăng ký.",
            "Bước 4: Xác nhận hoàn tất và lưu lại mã giao dịch để đối chiếu trong trường hợp cần khiếu nại.",
          ],
        },
      ],
      table: {
        title: "Thời gian xử lý theo phương thức",
        headers: ["Phương thức", "Thời gian xử lý", "Mức tối thiểu", "Mức tối đa"],
        rows: [
          ["Internet Banking", "1 – 5 phút", "50.000đ", "500.000.000đ"],
          ["Ví điện tử (Momo, ZaloPay)", "Tức thì", "20.000đ", "50.000.000đ"],
          ["Thẻ cào điện thoại", "5 – 10 phút", "10.000đ", "10.000.000đ"],
          ["Tiền điện tử (USDT)", "5 – 30 phút", "100.000đ", "Không giới hạn"],
        ],
      },
    },
    {
      heading: "Mẹo bảo mật và lưu ý quan trọng",
      paragraphs: [
        `Bảo mật tài khoản là ưu tiên hàng đầu khi tham gia bất kỳ nền tảng cá cược nào. Một sai sót nhỏ có thể dẫn đến hậu quả lớn về tài chính và thông tin cá nhân, vì vậy hãy áp dụng triệt để các nguyên tắc bảo mật dưới đây.`,
      ],
      lists: [
        {
          items: [
            "Luôn dùng mật khẩu mạnh — tối thiểu 12 ký tự, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt.",
            "Không bao giờ chia sẻ OTP, mật khẩu cho bất kỳ ai — kể cả người tự xưng là nhân viên hỗ trợ.",
            "Bật xác thực hai lớp (2FA) bằng ứng dụng Google Authenticator để tăng cường bảo mật.",
            "Theo dõi lịch sử giao dịch định kỳ và liên hệ tổng đài ngay khi phát hiện hoạt động bất thường.",
            "Không thao tác tài khoản trên Wifi công cộng hoặc thiết bị lạ.",
            "Đăng xuất khỏi tài khoản sau mỗi phiên sử dụng để tránh truy cập trái phép.",
          ],
        },
      ],
      prosCons: {
        pros: [
          "Bảo vệ tài chính cá nhân khỏi rủi ro mất cắp",
          "Tránh được lừa đảo công nghệ cao đang ngày càng tinh vi",
          "Yên tâm trải nghiệm dài hạn trên nền tảng",
        ],
        cons: [
          "Tốn thêm vài giây mỗi lần đăng nhập",
          "Phải ghi nhớ thêm thông tin bảo mật",
        ],
      },
    },
    {
      heading: "Xử lý các lỗi thường gặp",
      paragraphs: [
        `Trong quá trình ${low}, đôi khi bạn có thể gặp một số lỗi phổ biến. Dưới đây là cách xử lý nhanh giúp bạn không phải mất thời gian liên hệ hỗ trợ.`,
      ],
      table: {
        headers: ["Lỗi", "Nguyên nhân", "Cách khắc phục"],
        rows: [
          ["Không nhận được OTP", "Mạng yếu, sai số điện thoại", "Kiểm tra sóng, đợi 60s và yêu cầu gửi lại"],
          ["Sai thông tin xác minh", "Nhập sai dấu, sai họ tên", "So sánh chính xác với CCCD và nhập lại"],
          ["Giao dịch treo", "Hệ thống ngân hàng bảo trì", "Đợi 15-30 phút hoặc liên hệ tổng đài"],
          ["Tài khoản bị khoá tạm thời", "Đăng nhập sai liên tục", "Yêu cầu mở khoá qua email đã đăng ký"],
        ],
      },
    },
  ];
}

function promoSections(name: string): Section[] {
  const low = name.toLowerCase();
  return [
    {
      heading: `Tổng quan ${low}`,
      paragraphs: [
        `${name} được thiết kế dành riêng cho cộng đồng người chơi Việt Nam với mục tiêu mang lại giá trị thực, không phải những ưu đãi "ảo" khó nhận. Mỗi chương trình đều có điều khoản rõ ràng, thời gian áp dụng cụ thể và mức thưởng được công khai minh bạch.`,
        `Cơ cấu khuyến mãi xoay vòng theo tháng, đảm bảo cả thành viên mới lẫn người chơi lâu năm đều có cơ hội nhận được những ưu đãi phù hợp với phong cách chơi của mình.`,
        `Tổng giá trị thưởng tích luỹ trong năm 2026 ước tính lên đến hàng trăm tỷ đồng, đến từ nhiều nguồn khác nhau bao gồm tiền thưởng trực tiếp, hoàn trả, point tích luỹ và quà tặng vật lý.`,
      ],
    },
    {
      heading: "Các nhóm khuyến mãi phổ biến",
      paragraphs: [
        `Hệ thống khuyến mãi tại nền tảng được chia thành 6 nhóm chính, đáp ứng đa dạng nhu cầu của người chơi từ giải trí nhẹ nhàng đến cá cược chuyên nghiệp.`,
      ],
      lists: [
        {
          items: [
            "Thưởng chào mừng — dành cho thành viên đăng ký mới, tỉ lệ thưởng lên đến 200% lần nạp đầu.",
            "Hoàn trả cược thua — áp dụng hằng ngày/tuần với tỷ lệ từ 0.5% đến 1.5% tuỳ sản phẩm.",
            "Khuyến mãi nạp lại — cộng thêm 30-50% giá trị nạp tuỳ thời điểm và hạng thành viên.",
            "Ưu đãi sinh nhật — quà tặng đặc biệt cùng phiếu chơi miễn phí trong tháng sinh nhật.",
            "Sự kiện theo mùa — thưởng lớn theo các dịp lễ, World Cup, Tết Nguyên Đán.",
            "Chương trình tích điểm VIP — đổi điểm lấy tiền mặt, quà công nghệ, voucher du lịch.",
          ],
        },
      ],
      table: {
        title: "Bảng so sánh các loại khuyến mãi chính",
        headers: ["Loại", "Mức thưởng", "Vòng cược", "Đối tượng"],
        rows: [
          ["Chào mừng", "Lên đến 200%", "15-20 vòng", "Thành viên mới"],
          ["Hoàn trả", "0.5% - 1.5%", "1 vòng", "Tất cả thành viên"],
          ["Nạp lại", "30% - 50%", "10-15 vòng", "Thành viên cũ"],
          ["VIP", "Cố định", "5-10 vòng", "Hạng Vàng trở lên"],
        ],
      },
    },
    {
      heading: "Cách tham gia và nhận thưởng",
      paragraphs: [
        `Quy trình tham gia khuyến mãi đã được tối ưu hoá đáng kể trong năm 2026, hầu hết các chương trình đều cộng thưởng tự động ngay sau khi bạn đủ điều kiện.`,
      ],
      lists: [
        {
          items: [
            "Đăng nhập tài khoản và truy cập trang Khuyến mãi để xem danh sách ưu đãi đang hoạt động.",
            "Đọc kỹ điều khoản — đặc biệt là vòng cược, thời gian áp dụng và mức rút tối đa.",
            "Nhấn 'Tham gia ngay' và thực hiện nạp tiền (nếu cần) theo mức quy định.",
            "Tiền thưởng sẽ tự động cộng vào tài khoản — hoặc theo lịch tuần với các khuyến mãi hoàn trả.",
            "Hoàn thành vòng cược yêu cầu để có thể rút tiền thưởng về tài khoản chính chủ.",
          ],
        },
      ],
      prosCons: {
        pros: [
          "Tăng vốn chơi mà không cần bỏ thêm chi phí",
          "Giảm rủi ro nhờ chương trình hoàn trả",
          "Trải nghiệm thêm nhiều sản phẩm mới",
        ],
        cons: [
          "Vòng cược cao có thể khiến tiền thưởng khó rút",
          "Một số khuyến mãi giới hạn theo thời gian ngắn",
        ],
      },
    },
    {
      heading: "Lưu ý quan trọng khi sử dụng khuyến mãi",
      paragraphs: [
        `Khuyến mãi là công cụ tuyệt vời để gia tăng giá trị chơi, nhưng cũng tiềm ẩn một số rủi ro nếu bạn không hiểu rõ điều khoản. Hãy ghi nhớ những điểm sau để tránh các tranh chấp không đáng có.`,
      ],
      lists: [
        {
          items: [
            "Mỗi tài khoản chỉ được nhận một lần với khuyến mãi chào mừng — vi phạm sẽ bị khoá vĩnh viễn.",
            "Tuyệt đối không tạo nhiều tài khoản trên cùng IP/thiết bị để trục lợi.",
            "Tiền thưởng và tiền nạp được tính vòng cược chung — đọc kỹ phần này để hiểu yêu cầu thực tế.",
            "Một số sản phẩm như Baccarat huề, cược đối kháng không được tính vào vòng cược.",
            "Liên hệ tổng đài 24/7 trước khi tham gia nếu có bất kỳ điều khoản nào chưa rõ ràng.",
          ],
        },
      ],
    },
  ];
}

function infoSections(name: string): Section[] {
  return [
    {
      heading: `Về trang ${name}`,
      paragraphs: [
        `Trang ${name} là kênh thông tin chính thức của JUN888, được duy trì và cập nhật bởi bộ phận pháp chế và truyền thông nội bộ. Mọi nội dung tại đây đều được kiểm duyệt kỹ lưỡng trước khi xuất bản.`,
        `Chúng tôi đặt sự minh bạch và trải nghiệm người dùng làm trung tâm trong mọi quyết định vận hành, từ thiết kế sản phẩm đến chính sách hỗ trợ khách hàng.`,
        `Nếu phát hiện bất kỳ thông tin nào không chính xác, vui lòng phản hồi qua kênh liên hệ chính thức để chúng tôi cập nhật trong thời gian sớm nhất.`,
      ],
    },
    {
      heading: "Cam kết với cộng đồng người chơi",
      paragraphs: [
        `JUN888 cam kết tuân thủ các tiêu chuẩn quốc tế về bảo mật dữ liệu cá nhân, quy định chống rửa tiền (AML) và nguyên tắc chơi có trách nhiệm.`,
      ],
      lists: [
        {
          items: [
            "Bảo mật thông tin cá nhân theo chuẩn ISO/IEC 27001",
            "Mã hoá toàn bộ giao tiếp với chứng chỉ SSL 256-bit",
            "Tổng đài chăm sóc khách hàng 24/7 qua nhiều kênh",
            "Tuyển dụng đội ngũ chuyên trách kiểm duyệt nội dung tiếng Việt",
            "Hợp tác với các tổ chức quốc tế về chơi có trách nhiệm",
          ],
        },
      ],
    },
    {
      heading: "Các kênh liên hệ chính thức",
      paragraphs: [
        `Mọi thắc mắc, góp ý hoặc khiếu nại đều được xử lý nghiêm túc trong vòng 24 giờ làm việc. Chúng tôi luôn lắng nghe và cải tiến dịch vụ dựa trên phản hồi từ cộng đồng.`,
      ],
      table: {
        headers: ["Kênh", "Thời gian phản hồi", "Phù hợp cho"],
        rows: [
          ["Live Chat", "Tức thì", "Vấn đề khẩn cấp"],
          ["Hotline 24/7", "Tức thì", "Hỗ trợ tài chính"],
          ["Email", "Trong 24h", "Khiếu nại chính thức"],
          ["Telegram", "Trong 1h", "Tư vấn nhanh"],
          ["Facebook", "Trong 6h", "Cập nhật khuyến mãi"],
        ],
      },
    },
    {
      heading: "Chơi có trách nhiệm",
      paragraphs: [
        `JUN888 tin rằng giải trí trực tuyến chỉ có giá trị khi mang lại niềm vui mà không ảnh hưởng tiêu cực đến cuộc sống. Chúng tôi cung cấp đầy đủ công cụ để bạn kiểm soát thói quen của mình.`,
      ],
      lists: [
        {
          items: [
            "Đặt giới hạn nạp tiền theo ngày/tuần/tháng",
            "Đặt thời gian chơi tối đa mỗi phiên",
            "Tự nguyện khoá tài khoản tạm thời (1 tuần - 6 tháng)",
            "Truy cập miễn phí công cụ tự đánh giá hành vi cờ bạc",
            "Đường dây nóng hỗ trợ tâm lý 1800-xxxx miễn phí",
          ],
        },
      ],
      quote:
        "Cờ bạc không phải là cách kiếm tiền — đó là một hình thức giải trí. Chỉ chơi với số tiền bạn có thể chấp nhận mất.",
    },
  ];
}

function articleSections(name: string, topic: string): Section[] {
  return [
    {
      heading: `${name} là gì? Tổng quan đầy đủ`,
      paragraphs: [
        `${name} là một trong những bộ môn giải trí trực tuyến có sức hút bền vững nhất tại thị trường Việt Nam trong nhiều năm qua. Sự kết hợp giữa luật chơi đơn giản, nhịp độ nhanh và yếu tố chiến thuật đa tầng giúp ${topic} thu hút cả người chơi giải trí lẫn người chơi chuyên nghiệp.`,
        `Trong năm 2026, ${name} tiếp tục có những bước phát triển đáng kể về công nghệ — từ giao diện 3D mượt mà, dealer trực tiếp với chất lượng 4K cho đến tích hợp AI gợi ý chiến thuật theo thời gian thực.`,
        `Bài viết này sẽ giúp bạn nắm vững mọi khía cạnh của ${topic}, từ những khái niệm cơ bản nhất đến các chiến thuật nâng cao mà các tay chơi kỳ cựu đang áp dụng.`,
      ],
      lists: [
        {
          title: "Điểm nổi bật của bộ môn",
          items: [
            "Luật chơi dễ tiếp cận, học trong vài phút",
            "Tỷ lệ trả thưởng hấp dẫn (RTP 95-99% tuỳ trò)",
            "Đa dạng cửa cược phù hợp mọi mức ngân sách",
            "Có sẵn chế độ demo cho người mới làm quen",
            "Hỗ trợ chơi trên cả điện thoại và máy tính",
          ],
        },
      ],
    },
    {
      heading: `Luật chơi ${name} chi tiết`,
      paragraphs: [
        `Người chơi đặt cược trước khi vòng chơi bắt đầu dựa trên các cửa cược được quy định rõ ràng. Kết quả được xác định khách quan thông qua hệ thống RNG (Random Number Generator) đạt chuẩn quốc tế hoặc qua dealer trực tiếp được giám sát 24/7.`,
        `Mỗi cửa cược có tỷ lệ chi trả và xác suất xảy ra khác nhau, được công khai minh bạch để người chơi có thể tính toán mức rủi ro hợp lý. Việc nắm vững những con số này là điều kiện tiên quyết trước khi đặt cược bằng tiền thật.`,
      ],
      table: {
        title: `Bảng tỷ lệ thưởng tham khảo cho ${name}`,
        headers: ["Cửa cược", "Tỷ lệ thưởng", "Xác suất thắng", "Lợi thế nhà cái"],
        rows: [
          ["Cửa cơ bản", "1 : 1", "48% – 50%", "1% – 2%"],
          ["Cửa trung bình", "1 : 2", "32% – 34%", "2% – 3%"],
          ["Cửa cao cấp", "1 : 5", "15% – 18%", "3% – 5%"],
          ["Cửa đặc biệt", "1 : 30+", "2% – 4%", "5% – 10%"],
        ],
      },
    },
    {
      heading: "Chiến thuật quản lý vốn (Bankroll Management)",
      paragraphs: [
        `Quản lý vốn là kỹ năng quan trọng nhất quyết định bạn có thể trụ vững dài hạn trong ${topic} hay không. Theo thống kê của các sàn giải trí lớn, hơn 80% người chơi thua trong dài hạn không phải do "đen" mà do thiếu kế hoạch quản lý vốn hợp lý.`,
        `Một chiến lược quản lý vốn tốt sẽ giúp bạn vượt qua được các giai đoạn "downswing" tự nhiên và tận dụng tối đa khi đang trong chuỗi thắng.`,
      ],
      lists: [
        {
          title: "Nguyên tắc vàng quản lý vốn",
          items: [
            "Chia ngân sách thành 20-30 phiên chơi, mỗi phiên không quá 5% tổng vốn",
            "Đặt mức dừng lỗ rõ ràng — thường là 50% ngân sách phiên",
            "Đặt mức chốt lời — khi lãi 100% vốn phiên, nên rút và nghỉ",
            "Không bao giờ 'gỡ' bằng tiền lương hay tiền tiết kiệm",
            "Ghi chép từng phiên: thắng/thua/cảm xúc/chiến thuật áp dụng",
            "Nghỉ ít nhất 1 ngày sau mỗi phiên thua lớn để tránh ra quyết định cảm tính",
          ],
        },
      ],
    },
    {
      heading: "Chiến thuật thực chiến nâng cao",
      paragraphs: [
        `Sau khi đã thành thạo luật chơi và quản lý vốn, bạn có thể tiến lên áp dụng các chiến thuật nâng cao dưới đây. Lưu ý rằng không có chiến thuật nào đảm bảo thắng 100%, nhưng việc áp dụng đúng cách sẽ giúp tăng đáng kể tỷ lệ thắng trong dài hạn.`,
      ],
      lists: [
        {
          title: "Chiến thuật phổ biến và hiệu quả",
          items: [
            "Flat Betting — đặt mức cược cố định, tối thiểu rủi ro, phù hợp người mới",
            "Paroli — tăng cược khi thắng, giảm khi thua, tận dụng chuỗi thắng",
            "D'Alembert — tăng/giảm cược theo công thức cộng, ít rủi ro hơn Martingale",
            "Fibonacci — đặt cược theo dãy số Fibonacci để kiểm soát thua lỗ",
            "1-3-2-6 System — chiến thuật bậc thang dành cho phiên thắng liên tiếp",
          ],
        },
      ],
      prosCons: {
        pros: [
          "Có khung tham chiếu rõ ràng khi ra quyết định",
          "Kiểm soát cảm xúc tốt hơn khi đang trong chuỗi thua",
          "Tận dụng tối đa các chuỗi thắng tự nhiên",
        ],
        cons: [
          "Không có chiến thuật nào đảm bảo thắng 100%",
          "Đòi hỏi kỷ luật cao — dễ bỏ giữa chừng",
          "Một số chiến thuật yêu cầu vốn lớn để 'kéo' qua chuỗi thua",
        ],
      },
    },
    {
      heading: "Các sai lầm phổ biến cần tránh",
      paragraphs: [
        `Phần lớn người chơi thua tiền không phải vì không hiểu luật, mà vì mắc phải những sai lầm tâm lý phổ biến. Nhận diện và tránh được những "bẫy" này sẽ giúp bạn tiến bộ nhanh hơn rất nhiều.`,
      ],
      lists: [
        {
          items: [
            "Tilt — chơi theo cảm xúc khi đang bực tức hoặc say men chiến thắng",
            "Chasing losses — đặt cược lớn để 'gỡ' lại tiền đã thua trong cùng phiên",
            "Bỏ qua quản lý vốn và đặt cược theo hứng",
            "Nghe theo 'cao thủ' trên mạng mà không kiểm chứng",
            "Lạm dụng đòn bẩy hoặc các chiến thuật progression như Martingale",
            "Chơi quá nhiều phiên trong ngày dẫn đến mệt mỏi và sai sót",
            "Không có nhật ký phiên chơi để rút kinh nghiệm",
          ],
        },
      ],
      quote: `"Người chơi giỏi không phải là người thắng nhiều ván nhất, mà là người biết dừng đúng lúc."`,
    },
    {
      heading: `Mẹo chọn nền tảng ${topic} uy tín`,
      paragraphs: [
        `Lựa chọn nền tảng uy tín là yếu tố quyết định trải nghiệm và sự an toàn tài chính của bạn. Năm 2026 chứng kiến sự bùng nổ của nhiều nền tảng mới, kèm theo đó là không ít trang lừa đảo cần cảnh giác.`,
      ],
      table: {
        title: "Tiêu chí đánh giá nền tảng uy tín",
        headers: ["Tiêu chí", "Mức đạt yêu cầu", "Cờ đỏ cảnh báo"],
        rows: [
          ["Giấy phép", "PAGCOR, MGA, Curacao", "Không có thông tin giấy phép"],
          ["Tuổi đời", "Trên 5 năm hoạt động", "Mới mở dưới 1 năm"],
          ["Đánh giá cộng đồng", "Trên 4.0/5 từ 1000+ review", "Phản hồi tiêu cực về rút tiền"],
          ["Hỗ trợ tiếng Việt", "Live chat 24/7", "Chỉ có chatbot tự động"],
          ["Phương thức thanh toán", "Hỗ trợ ngân hàng VN, ví điện tử", "Chỉ chấp nhận tiền điện tử"],
        ],
      },
    },
    {
      heading: "Lời khuyên cuối cùng cho người chơi",
      paragraphs: [
        `${name} là một hình thức giải trí thú vị khi được tiếp cận đúng cách. Hãy luôn nhớ rằng đây không phải con đường làm giàu, mà là một thú vui có chi phí — giống như đi xem phim hay ăn nhà hàng.`,
        `Đặt giới hạn chi tiêu rõ ràng, chơi với tâm thế thoải mái và biết dừng đúng lúc là ba nguyên tắc quan trọng nhất giúp bạn duy trì niềm vui dài hạn với ${topic} mà không gặp phải các vấn đề tài chính hay tâm lý.`,
        `Nếu bạn cảm thấy mất kiểm soát, hãy chủ động sử dụng các công cụ tự khoá tài khoản hoặc liên hệ đường dây hỗ trợ chuyên môn. Sức khoẻ tinh thần và tài chính của bạn luôn quan trọng hơn bất kỳ ván cược nào.`,
      ],
    },
  ];
}

function makeFaqs(name: string, topic: string, _kind: PageKind): { q: string; a: string }[] {
  return [
    {
      q: `${name} có hợp pháp tại Việt Nam không?`,
      a: `Hiện nay pháp luật Việt Nam có những quy định riêng về hoạt động cá cược. Người chơi cần tìm hiểu kỹ quy định pháp luật hiện hành tại địa phương của mình. JUN888 chỉ cung cấp thông tin tham khảo, không tổ chức cá cược và luôn khuyến khích người dùng chơi có trách nhiệm.`,
    },
    {
      q: `Người mới hoàn toàn nên bắt đầu với ${topic} như thế nào?`,
      a: `Hãy bắt đầu bằng việc đọc kỹ luật chơi cơ bản, sau đó thử ở chế độ demo miễn phí để làm quen với nhịp độ và giao diện. Khi đã tự tin, hãy bắt đầu với mức cược nhỏ nhất có thể và tăng dần theo kinh nghiệm — đừng vội đặt cược lớn ngay từ đầu.`,
    },
    {
      q: `Làm sao để chọn được nền tảng ${topic} uy tín?`,
      a: `Ưu tiên những nền tảng có giấy phép quốc tế rõ ràng (PAGCOR, MGA, Curacao), tuổi đời trên 5 năm, có lịch sử thanh toán minh bạch, được cộng đồng đánh giá tích cực và đặc biệt là hỗ trợ tiếng Việt 24/7. Tránh xa các trang web mới mở chỉ chấp nhận tiền điện tử.`,
    },
    {
      q: `Có chiến thuật nào "chắc thắng" trong ${topic} không?`,
      a: `Không có bất kỳ chiến thuật nào đảm bảo thắng 100% — mọi trò chơi đều mang yếu tố may rủi và nhà cái luôn có lợi thế nhất định (house edge). Tuy nhiên, việc áp dụng quản lý vốn chặt chẽ và các chiến thuật như Flat Betting hay Paroli có thể giúp bạn giảm thiểu rủi ro và tận dụng tối đa khi đang may mắn.`,
    },
    {
      q: `Tôi nên đặt giới hạn chi tiêu bao nhiêu cho ${topic}?`,
      a: `Nguyên tắc vàng là chỉ sử dụng số tiền mà bạn có thể chấp nhận mất hoàn toàn mà không ảnh hưởng tới sinh hoạt, công việc và các mối quan hệ. Đa số chuyên gia khuyến nghị không nên dành quá 1-2% thu nhập tháng cho hoạt động giải trí cá cược.`,
    },
    {
      q: `RTP là gì và tại sao quan trọng?`,
      a: `RTP (Return To Player) là tỷ lệ phần trăm tiền cược mà trò chơi trả lại cho người chơi trong dài hạn. RTP càng cao thì lợi thế nhà cái càng thấp. Trong ${topic}, hãy ưu tiên các cửa cược/trò chơi có RTP từ 96% trở lên để tối ưu giá trị chơi.`,
    },
    {
      q: `Tôi có thể chơi ${topic} trên điện thoại không?`,
      a: `Hoàn toàn được. Năm 2026, hầu hết các nền tảng đều có ứng dụng di động riêng cho cả iOS và Android, hoặc giao diện web đã được tối ưu cho mobile. Trải nghiệm trên điện thoại hiện nay không thua kém gì máy tính, thậm chí còn tiện lợi hơn nhờ tính năng vân tay/Face ID.`,
    },
    {
      q: `Phải làm gì khi cảm thấy mất kiểm soát với ${topic}?`,
      a: `Đây là dấu hiệu nghiêm trọng cần xử lý ngay. Hãy chủ động sử dụng các công cụ tự khoá tài khoản (self-exclusion) trong khoảng 1 tuần đến 6 tháng, đặt giới hạn nạp tiền chặt chẽ, và liên hệ đường dây nóng hỗ trợ tâm lý miễn phí. Tâm sự với gia đình hoặc chuyên gia tâm lý cũng là bước quan trọng.`,
    },
  ];
}

export const PAGE_BY_SLUG: Record<string, PageDef> = Object.fromEntries(
  PAGES.map((pg) => [pg.slug, pg])
);

// Related links
for (const pg of PAGES) {
  pg.related = PAGES.filter((o) => o.slug !== pg.slug && o.category === pg.category && o.slug !== "")
    .slice(0, 4)
    .map((o) => o.slug);
  if (pg.related.length < 4) {
    const extra = PAGES.filter((o) => o.slug !== pg.slug && !pg.related.includes(o.slug) && o.slug !== "").slice(
      0,
      4 - pg.related.length
    );
    pg.related = [...pg.related, ...extra.map((o) => o.slug)];
  }
}

export const LAST_UPDATED = updated;

export const NAV_GROUPS: { label: string; items: { slug: string; label: string }[] }[] = [
  {
    label: "Casino",
    items: [
      { slug: "casino", label: "Casino" },
      { slug: "casino-jun88", label: "Casino JUN88" },
      { slug: "baccarat-jun88", label: "Baccarat" },
      { slug: "baccarat-online", label: "Baccarat Online" },
      { slug: "blackjack-jun88", label: "Blackjack" },
      { slug: "roulette-jun88", label: "Roulette" },
      { slug: "rong-ho-jun88", label: "Rồng Hổ" },
      { slug: "rong-ho-online", label: "Rồng Hổ Online" },
    ],
  },
  {
    label: "Thể thao",
    items: [
      { slug: "the-thao", label: "Thể thao" },
      { slug: "esport", label: "Esport" },
    ],
  },
  {
    label: "Xổ số & Lô đề",
    items: [
      { slug: "xo-so", label: "Xổ số" },
      { slug: "giai-den-lo-de", label: "Giải đen lô đề" },
      { slug: "bao-lo-la-gi", label: "Bao lô là gì" },
      { slug: "cach-tinh-diem-lo", label: "Cách tính điểm lô" },
    ],
  },
  {
    label: "Game bài",
    items: [
      { slug: "poker-jun88", label: "Poker JUN88" },
      { slug: "poker-online", label: "Poker Online" },
      { slug: "rake-la-gi-trong-poker", label: "Rake là gì" },
      { slug: "tai-xiu", label: "Tài Xỉu" },
      { slug: "tai-xiu-jun88", label: "Tài Xỉu JUN88" },
      { slug: "xoc-dia-jun88", label: "Xóc Đĩa" },
      { slug: "xoc-dia-bip", label: "Xóc Đĩa bịp" },
      { slug: "no-hu", label: "Nổ hũ" },
    ],
  },
  {
    label: "Tài khoản",
    items: [
      { slug: "dang-ky-jun88", label: "Đăng ký" },
      { slug: "dang-nhap-jun88", label: "Đăng nhập" },
      { slug: "nap-tien-jun88", label: "Nạp tiền" },
      { slug: "rut-tien-jun88", label: "Rút tiền" },
      { slug: "tai-app-jun88", label: "Tải App" },
    ],
  },
  {
    label: "Khuyến mãi",
    items: [
      { slug: "khuyen-mai", label: "Khuyến mãi" },
      { slug: "uu-dai", label: "Ưu đãi" },
      { slug: "su-kien", label: "Sự kiện" },
    ],
  },
  {
    label: "Thông tin",
    items: [
      { slug: "gioi-thieu", label: "Giới thiệu" },
      { slug: "lien-he-jun88", label: "Liên hệ" },
      { slug: "lien-he-voi-chung-toi", label: "Liên hệ với chúng tôi" },
      { slug: "van-hoa-doanh-nghiep", label: "Văn hóa DN" },
      { slug: "tuyen-dung", label: "Tuyển dụng" },
      { slug: "dieu-khoan-dich-vu", label: "Điều khoản" },
      { slug: "chinh-sach-quyen-rieng-tu", label: "Quyền riêng tư" },
    ],
  },
];
