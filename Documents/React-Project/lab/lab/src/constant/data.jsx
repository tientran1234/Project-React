// Dữ liệu phim
const data = [
    {
      id: 1,
      name: "Inception",
      img: ".../../src/assets/img/phim1.jpeg",
      info:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      year: 2010,
      actors: ["Leonardo DiCaprio", "Ellen Page"],
      director: "Christopher Nolan",
      link:<iframe width="560" height="315" src="https://www.youtube.com/embed/y2TCjYiTGIo?si=kpxQ6HllinxN1rLe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
      id: 2,
      name: "Ant-man",
      img: ".../../src/assets/img/phim2.jpeg",
      info:
        "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
      year: 2015,
      actors: ["Paul Rudd", "Evangeline Lilly"],
      director: "Peyton Reed",
      link:<iframe width="560" height="315" src="https://www.youtube.com/embed/pWdKf3MneyI?si=XJsvd8bsdYQXNiPz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
      id: 3,
      name: "Cô Ba Sài Gòn",
      img: ".../../src/assets/img/phim3.jpeg",
      info:
        "Truyện phim lấy chủ đề thời trang kết hợp yếu tố xuyên không kỳ ảo do Ngô Thanh Vân và Thủy Nguyễn làm sản xuất, dựa theo phần kịch bản của A Type Machine. Phim có sự tham gia của các diễn viên Ninh Dương Lan Ngọc, NSND Hồng Vân, Diễm My, Ngô Thanh Vân, Diễm My 9x, S.T Sơn Thạch và Oanh Kiều. Chủ đề chính của phim là tôn vinh áo dài, trang phục truyền thống của Việt Nam.",
      year: 2019,
      actors: ["Ninh Dương Lan Ngọc", "NSND Hồng Vân"],
      director: "Ngô Thanh Vân",
      link:<iframe width="560" height="315" src="https://www.youtube.com/embed/YP4TDQVkZO4?si=aV9hQvhWpnt-MFSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      id: 4,
      name: "Năm Bước Để Yêu",
      img: ".../../src/assets/img/phim4.jpeg",
      info:
        "Năm Bước Để Yêu là câu chuyện tình nơi bệnh viên của Stella và Will. Cả hai mang chứng bệnh u xơ nang và hoại tử phổi. Họ không thể đến gần nhau hơn 6 bước chân (1,8 mét)",
      year: 2017,
      actors: ["Amanda Seyfried", "Milo Ventimiglia"],
      director: "Peter Chelsom",
      link:<iframe width="560" height="315" src="https://www.youtube.com/embed/nFFlkhoOM0g?si=iE9gVr0D9ff4azOW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      id: 5,
      name: "Mắt Biết",
      img: ".../../src/assets/img/phim5.jpeg",
      info:
        "Mắt biếc xoay quanh mối tình đơn phương của Ngạn với Hà Lan, cô bạn gái có cặp mắt hút hồn nhưng cá tính bướng bỉnh. Một chuyện tình nhiều cung bậc, từ ngộ nghĩnh trẻ con, rồi tình yêu thuở học trò trong sáng, trải qua bao biến cố, trở thành một cuộc đuổi hình bắt bóng buồn da diết nhưng không nguôi hi vọng. Câu chuyện càng trở nên éo le hơn khi Trà Long - con gái của Hà Lan lớn lên lại nhen nhóm một tình yêu như thế với Ngạn.",
      year: 2019,
      actors: ["Trúc Anh", "Hoàng Yến Chibi"],
      director: "Victor Vũ",
      link:<iframe width="560" height="315" src="https://www.youtube.com/embed/KSFS0OfIK2c?si=KlrrQwr0NamYAN--" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    },
    {
      id: 6,
      name: "Us",
      img: ".../../src/assets/img/phim6.jpeg",
      info:
        "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
      year: 2019,
      actors: ["Lupita Nyong'o", "Winston Duke"],
      director: "Jordan Peele",
      link:<iframe width="560" height="315" src="https://www.youtube.com/embed/hNCmb-4oXJA?si=sRWRPpZrGkahro1n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      id: 7,
      name: "Fast & Furious",
      img: ".../../src/assets/img/phim7.jpeg",
      info:
        "Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
      year: 2009,
      actors: ["Vin Diesel", "Paul Walker"],
      director: "Justin Lin",
      link:<iframe width="560" height="315" src="https://www.youtube.com/embed/MNj6Kj0n9rI?si=0YJL8Gep8fLAfZ6S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    // Thêm thông tin cho các phim khác
  ];
  
  export default data;
  