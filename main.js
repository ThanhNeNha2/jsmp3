const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const AppMusic = $(".AppMusic");

const homeBtn = $(".heading-controler .backBtn");
const listBtn = $(".heading-controler .listBtn");
const pageHome = $(".home");
const pageList = $(".playlist");
const audio = $("#audio");
const headingMusicName = $(".dashboard h2");
const headingMusicSinger = $(".dashboard h3");
const headingMusicTime = $("#musicTime");
const headingMusicTimeStart = $("#timeStart");
const headingCdThumb = $(".cd img");
const playBtn = $(".play");
const play2Btn = $(".play2");
const playPause = $(".footer-controler");
const play2Pause = $(".songLive");
const progress = $(".progress");
const prevMusic = $(".prevMusic");
const prevTime = $(".prevTime");
const nextMusic = $(".nextMusic");
const nextTime = $(".nextTime");
const repeatBtn = $(".repeatBtn");
const randomBtn = $(".randomBtn");
const playlist = $(".playlist");
const playListName = $(".heading-controler p");
const songLive = $(".songLive");
const songLiveName = $(".songLive .dashboard h2");
const songLiveSinger = $(".songLive .dashboard h3");
const closeBtn = $(".songLive .close");
const volumn = $("#volumnSlider");
const volumnBtn = $(".volumn");
const volumnOn = $(".volumnOn");
const offVolumn = $(".offVolumn");

const optionHeading = $(".option");
const optionMenu = $(".options");
const lyricsBtn = $(".lyricsBtn");
const pageLyrics = $(".lyrics");
const lyricName = $(".dashboard1 h2");
const lyricsSinger = $(".dashboard1 h3");
const lyrics = $(".dashboard1 p");
const lyricsHeading = $(".heading-controler p");
const dowloadBtn = $(".dowloadBtn");

const playlistTime = $(".playlistOption p");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const formattedTime = `${minutes}:${remainderSeconds
    .toString()
    .padStart(2, "0")}`;
  return formattedTime;
}

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isVolumn: false,
  songs: [
    {
      name: "2 phút hơn ",
      singer: "Pháo",
      path: "./LinkNhac/2-Phut-Hon-Phao-Mouse-T-Wack.mp3",
      image: "./img-chinh/2-phut-hon.jpg",
      lyrics: `Mouse 
    Tay em đang run run
    Nhưng anh thì cứ rót đi
    Anh mà không nể em
    Là khi mà anh không hết ly
    Uống thêm vài ly
    Đời mình chẳng mấy khi vui
    Nốc thêm vài chai
    Vì anh em chả mấy khi gặp lại
    Nơi đây đang xoay xoay
    Thế gian đang xoay vòng
    Anh đang ở nơi đâu
    Biết anh có thay lòng
    Đừng nói chi mà, mình uống đi
    Một hai ba bốn hai ba một
    Hình như anh nói anh say rồi
    Một hai ba bốn hai ba một
    Hình như anh nói anh yêu em rồi
    Uống đi, uống
    Vài chuyện buồn được cuốn đi, quên
    Huống chi, vì
    Thời điểm này có mấy khi, đúng
    Em hãy cứ vui như hôm nay
    Ánh mắt trao anh vẫn còn đầy
    Mình cạn chén rượu cười thật say
    Tình yêu chông gai
    Làm cho ta hào mòn gầy, hao
    Hạ ly cạn ở trên tay
    Mà không hay mình thêm say
    Ưu phiền ngày hôm nay
    Tất cả được quên ngay, quên
    Để tâm tư bay lên mây
    Gối đầu yên vòng tay anh
    Mặc cho lòng say nhanh
    Tả trăng mọc trên cây
    Giữ kỉ niệm và kí ức
    Làm cho ta vô tư
    Không còn thấy bí bức, vô tư
    Thả lỏng cả trong ý thức
    Vì bên anh, em sẽ
    Không cần phải phí sức, không cần
    Tận hưởng khi cặp mắt nhắm, nhắm
    Cảm nhận vị son đậm gắt đắng, đắng
    Chút khờ dại này thêm quen
    Khi em nói
    Em muốn say cùng anh đêm nay
    Một hai ba bốn hai ba một
    Hình như anh nói anh say rồi
    Một hai ba bốn hai ba một
    Hình như anh nói anh yêu em rồi
    Đừng nói chi mà, mình uống đi à
    Đừng nói chi mà, mình uống đi
    Mouse T
    Uống không anh
    Làm ly`,
    },
    {
      name: "Length never die",
      singer: "ft. Against The Current",
      path: "./LinkNhac/league-of-legends.mp3",
      image: "./img-chinh/lengends.jpg",
      lyrics: `Legends Never Die when the world is calling you

    Can you hear them screaming out your name?
    
    Legends Never Die they become a part of you
    
    Every time you bleed for reaching greatness
    
    Relentless you survive
    
    They never lose hope when everything's cold and the fighting's near
    
    It's deep in their bones they'll run into smoke when the fire is fierce
    
    "Oh pick yourself up, " cause
    
    Legends Never Die when the world is calling you
    
    Can you hear them screaming out your name?
    
    Legends Never Die they become a part of you
    
    Every time you bleed for reaching greatness
    
    Legends Never Die
    
    They're written down in eternity
    
    But you'll never see the price it costs, the scars collected all their lives
    
    When everything's lost, they pick up their hearts and avenge defeat
    
    Before it all starts, they suffer through harm just to touch a dream
    
    "Oh pick yourself up, " cause
    
    Legends Never Die when the world is calling you
    
    Can you hear them screaming out your name?
    
    Legends Never Die they become a part of you
    
    Every time you bleed for reaching greatness
    
    Legends Never Die
    
    When the world is calling out your name
    
    Begging you to fight
    
    Pick yourself up once more
    
    Pick yourself up, 'cause
    
    Legends Never Die when the world is calling you
    
    Can you hear them screaming out your name?
    
    Legends Never Die they become a part of you
    
    Every time you bleed for reaching greatness
    
    Legends Never Die..`,
    },
    {
      name: "Hãy trao cho anh ",
      singer: "Sơn Tùng MTP",
      path: "./LinkNhac/y2mate.com - SƠN TÙNG MTP  HÃY TRAO CHO ANH ft Snoop Dogg  Official MV.mp3",
      image: "./img-chinh/hay-trao-cho-anh.jpg",
      lyrics: ` 

      Bóng ai đó nhẹ nhàng vụt qua nơi đây
      Quyến rũ ngây ngất loạn nhịp làm tim mê say
      Cuốn lấy áng mây theo cơn sóng xô dập dìu
      Nụ cười ngọt ngào cho ta tan vào phút giây miên man quên hết con đường về eh
      Chẳng thể tìm thấy lối về ehhhhh
      Điệu nhạc hòa quyện trong ánh mắt đôi môi
      Dẫn lối những bối rối rung động khẽ lên ngôi
      
       
      
      Chạm nhau mang vô vàn
      Đắm đuối vấn vương dâng tràn
      Lấp kín chốn nhân gian
      Làn gió hoá sắc hương mơ màng
      Một giây ngang qua đời
      Cất tiếng nói không nên lời
      Ấm áp đến trao tay ngàn sao trời lòng càng thêm chơi vơi
      Dịu êm không gian bừng sáng đánh thức muôn hoa mừng
      Quấn quít hát ngân nga từng chút níu bước chân em dừng
      Bao ý thơ tương tư ngẩn ngơ
      Lưu dấu nơi mê cung đẹp thẫn thờ
      
       
      
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh thứ anh đang mong chờ
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy mau làm điều ta muốn vào khoảnh khắc này đê
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao anh trao cho anh đi những yêu thương nồng cháy
      Trao anh ái ân nguyên vẹn đong đầy
      
       
      
      Looking at my Gucci is about that time
      We can smoke a blunt and pop a bottle of wine
      Now get yourself together and be ready by nine
      Cuz we gon’ do some things that will shatter your spine
      Come one, undone, Snoop Dogg, Son Tung
      Long Beach is the city that I come from
      So if you want some, get some
      Better enough take some, take some
      
       
      
      Chạm nhau mang vô vàn
      Đắm đuối vấn vương dâng tràn
      Lấp kín chốn nhân gian làn
      Gió hóa sắc hương mơ màng
      Một giây ngang qua đời
      Cất tiếng nói không nên lời
      Ấm áp đến trao tay ngàn sao trời lòng càng thêm chơi vơi
      Dịu êm không gian bừng sáng đánh thức muôn hoa mừng
      Quấn quít hát ngân nga từng chút níu bước chân em dừng
      Bao ý thơ tương tư ngẩn ngơ
      Lưu dấu nơi mê cung đẹp thẫn thờ
      
       
      
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh thứ anh đang mong chờ
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy mau làm điều ta muốn vào khoảnh khắc này đê
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao anh trao cho anh đi những yêu thương nồng cháy
      Trao anh ái ân nguyên vẹn đong đầy
      
       
      
      Em cho ta ngắm thiên đàng vội vàng qua chốc lát
      Như thanh âm chứa bao lời gọi mời trong khúc hát
      Liêu xiêu ta xuyến xao rạo rực khát khao trông mong
      Dịu dàng lại gần nhau hơn dang tay ôm em vào lòng
      Trao đi trao hết đi đừng ngập ngừng che dấu nữa
      Quên đi quên hết đi ngại ngùng lại gần thêm chút nữa
      Chìm đắm giữa khung trời riêng hai ta như dần hòa quyện mắt nhắm mắt tay đan tay hồn lạc về miền trăng sao
      
       
      
      Em cho ta ngắm thiên đàng vội vàng qua chốc lát
      Như thanh âm chứa bao lời gọi mời trong khúc hát
      Liêu xiêu ta xuyến xao rạo rực khát khao trông mong
      Dịu dàng lại gần nhau hơn dang tay ôm em vào lòng
      Trao đi trao hết đi đừng ngập ngừng che dấu nữa
      Quên đi quên hết đi ngại ngùng lại gần thêm chút nữa
      Chìm đắm giữa khung trời riêng hai ta như dần hòa quyện mắt nhắm mắt tay đan tay hồn lạc về miền trăng sao
      
       
      
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh
      Hãy trao cho anh thứ anh đang mong chờ`,
    },
    {
      name: "Lift",
      singer: "Binz",
      path: "./LinkNhac/lift-ft-a-milo-official-lyrics-video.mp3",
      image: "./img-chinh/lift.jpg",
      lyrics: `Gánh nặng là thứ anh không đeo

      Quy tắc là thứ anh không theo
      
      Con flow này trơn như vỏ chuối
      
      Nhưng làm em dính như băng keo
      
      Không phải bánh chưng anh không bị bó buộc
      
      Như là hoàng hôn phải chiều mới có được
      
      Biết là thua nhưng em vẫn cố cược
      
      Vào tầm ngắm anh bắn là khó trượt
      
      Champagne, mang ra rót
      
      Âm nhạc nguyên thủy đó là analog
      
      Double S, on the top
      
      Run the game, mặc dù xuất phát là underdog
      
      Dám đối đầu với anh thì em cũng ngang đấy
      
      On the move và khu này đang cháy
      
      Thắng làm vua bọn thua còn đang gáy
      
      Đưa đồng đội đi lên anh như là thang máy
      
      Yada Yada Yada
      
      Nếu mày nói xấu đó là karma
      
      Từ trong ngõ ngách đến nơi xa hoa
      
      Bọn anh phủ sóng trên mọi radar
      
      Yada Yada Yada
      
      Em muốn xin được số sorry ah ah
      
      Phong cách lịch lãm nhưng thật ra là
      
      Tính anh khá bướng như là Natra
      
      Yada oh oh Yada oh oh
      
      Trong trạng thái cẩn thận khu vực này đông sói
      
      Yada oh oh Yada oh oh
      
      Chuyện xảy ra ở đây bọn tao thường không nói
      
      Yada oh oh Yada oh oh
      
      Đừng có bước vào đây phòng này để xông khói
      
      Yada oh oh Yada oh oh
      
      Dây chuyền đang phát sáng nhìn bọn này trông chói
      
      Không gian trôi chậm, xung quanh sôi động
      
      Tên anh tô đậm, homies coi trọng
      
      Tính anh ít nói, hater hít khói
      
      Chế độ sẵn sàng mỗi khi beat tới
      
      Bán nhạc chứ anh không bán chất
      
      Đặt thêm mục tiêu rồi cán mốc
      
      Có quà về chia cho đám nhóc
      
      Ngồi ghế sau như là giám đốc
      
      Beat căng là bọn anh liền băm
      
      Làm thêm điếu thuốc, bật lên con loa kiểm âm
      
      Cảm nhận dư vị đây chỉ là bữa điểm tâm
      
      Có thể gọi anh là một nghệ sĩ tiềm năng
      
      Khi mà Milo không ngại đặt bản thân vào thử thách
      
      Nếu mà đã muốn làm thì sẽ tìm đủ cách
      
      Ngồi từ 9h sáng cho tới tận xuyên đêm
      
      Lyrics anh viết ra đóng được cả tủ sách
      
      Yada Yada Yada
      
      Nếu mày nói xấu đó là karma
      
      Từ trong ngõ ngách đến nơi xa hoa
      
      Bọn anh phủ sóng trên mọi radar
      
      Yada Yada Yada
      
      Em muốn xin được số sorry ah ah
      
      Phong cách lịch lãm nhưng thật ra là
      
      Tính anh khá bướng như là Natra
      
      Yada oh oh Yada oh oh
      
      Trong trạng thái cẩn thận khu vực này đông sói
      
      Yada oh oh Yada oh oh
      
      Chuyện xảy ra ở đây bọn tao thường không nói
      
      Yada oh oh Yada oh oh
      
      Đừng có bước vào đây phòng này để xông khói
      
      Yada oh oh Yada oh oh
      
      Dây chuyền đang phát sáng nhìn bọn này trông chói
      
      Badass im bad
      
      Bad
      
      Badass im bad
      
      Bad`,
    },
    {
      name: "Lững lơ",
      singer: "Masew x Bray",
      path: "./LinkNhac/y2mate.com - Lửng Lơ  MASEW x BRAY ft RedT x Ý Tiên  MV OFFICIAL.mp3",
      image: "./img-chinh/lững-lo.jpg",
      lyrics: `Ngày trôi dài hơn đêm
      Đôi ta chỉ mong yên bình
      Đừng theo làn mây trôi
      Buông lơi niềm tin quá vội
      Lưng chừng giữa bao hạnh phúc mới
      Lửng lơ tình yêu cũ
      Chạy theo ngàn đau thương
      Con tim này đã héo mòn
      Chẳng nguyên vẹn như xưa
      Nước mắt giờ trôi theo vết mưa
      Đốt sạch hết tháng ngày
      Đã có nhau giờ đã chết
      Don’t wanna be like that
      Nhìn về phía trước my bae
      Bao nhiêu yêu thương em thấy
      Sao cứ mãi tìm mây với giông
      Những phút lững lờ
      Con tim thẫn thờ
      Sao em nỡ
      Yêu ai yêu hết con tim
      Đừng vì lí trí mà tìm
      Tìm một hạt nắng mới tới bên em
      Tháng năm đâu chờ
      Mà sao em cứ mơ
      Lửng lơ cùng với tình mình
      Lửng lơ làm cháy lòng tình
      Lửng lơ cùng với phút giây
      Thiết tha chúng ta giờ đã chết
      Lửng lơ rồi đứng một mình
      Lửng lơ chẳng biết
      Dành tình yêu cho ai
      Và rồi em cứ mong chờ
      Một ai đó ân cần tới bến
      Lửng lơ rồi đứng một mình
      Anh uống nhiều hơn một tí
      Nhạc tình viết như cuốn nhật ký
      Em ngã vào bầu trời mới lạ
      Em đó là phản vật lý
      Hắn hứa hẹn em một chân trời
      Em vội gật đầu
      Như đứa trẻ vâng lời
      Anh lửng lơ vẫn chờ và vẫn đợi
      Tất cả những nơi
      Mà ta đã từng tới
      Chỉ là hắn đưa em
      Quyển sách chưa xem
      Em vội thiêu đốt cả thư viện
      Hắn chỉ cho em thấy
      Được vài từ đồng nghĩa
      Em đã vội vàng
      Nghi ngờ cuốn từ điển
      Sao em hôn môi anh ta
      Bằng son môi anh trả
      Yêu và thương nhận lại dối và trá
      Và Em quay trở về
      Khi mối tình ra đi trong vội vã
      That what you tell me
      Love is in the air
      Imma take you high
      I’ll drive you crazy
      Everynight our love is on fire
      My love for you is blinded
      I’ll love you through all kisses
      We’ll just gonna be so fuckin fine
      Don’t wanna be like that
      Nhìn về phía trước my bae
      Bao nhiêu yêu thương em thấy không
      Sao cứ mãi tìm mây với giông
      Những phút lững lờ
      Con tim thẫn thờ
      Sao em nỡ
      Yêu ai yêu hết con tim
      Đừng vì lí trí mà tìm
      Tìm một hạt nắng mới tới bên em
      Tháng năm đâu chờ
      Mà sao em cứ mơ
      Lửng lơ cùng với tình mình
      Lửng lơ làm cháy lòng tình
      Lửng lơ cùng với phút giây
      Thiết tha chúng ta giờ đã chết
      Lửng lơ rồi đứng một mình
      Lửng lơ chẳng biết
      Dành tình yêu cho ai
      Và rồi em cứ mong chờ
      Một ai đó ân cần tới bến
      Lưng lơ rồi đứng một mình`,
    },
    {
      name: "Tell ur mom",
      singer: "Winno",
      path: "./LinkNhac/y2mate.com - Winno  Tell Ur Mom II ft Heily Official Lyric Video.mp3",
      image: "./img-chinh/tell-ur-mom.jpg",
      lyrics: `Em xinh như hoa với thần thái ice
      Dịu dàng em bước đi vào trong Night Life
      Don't say bye bye, no
      Được nắm đôi tay của em
      Và đi cùng em đến cuối đời
      Đó có phải là yêu hay không
      Tại sao lòng anh lại tin hoài
      Đó có phải mộng mơ
      Khi hai mình mong về lâu đài
      Đó là lời anh ước
      Về tương lai hai ta sau này
      Có nụ hồng không phai
      Feel lonely after midnight
      Em biết đó là yêu
      Khi em toàn ra vẻ yêu kiều
      Lắm lúc cũng buồn thiu
      Song ngày đêm mộng mơ nhiều
      Baby không phải em kiêu
      Mà do em chưa dám làm liều
      I'm a lil' shy
      Nên em mong anh sẽ hiểu
      Em biết là em xinh
      Không những thế còn thông minh nè
      Nhưng sao tránh khỏi rung rinh
      Khi thấy anh đứng một mình
      Phải làm sao
      Khi em không thể giữ bình tĩnh
      Đôi mắt anh hướng về em
      Như trúng một tia sét ái tình
      Em xinh như hoa với thần thái ice
      Dịu dàng em bước đi vào trong Night Life
      Don't say bye bye, no
      Được nắm đôi tay của em
      Và đi cùng em đến cuối đời
      Em xinh như hoa với thần thái ice
      Dịu dàng em bước đi vào trong Night Life
      Don't say bye bye, no
      Được nắm đôi tay của em
      Và đi cùng em đến cuối đời
      Lòng thì đau nhói
      Vì lời còn chưa nói
      Hình như là thứ cảm xúc kia
      Đều toàn là giả dối
      Chỉ một mình anh thôi
      Ngồi lặng nhìn mây trôi
      Kèm theo ưu tư mang tên em
      Đi về nơi xa xôi
      Người đừng như rứa
      Chẳng còn chi nữa
      Để mặc kệ cho bao nhiêu dư âm
      Hòa vào cơn mưa
      Nhẹ nhàng chạm vội qua tay
      Mà yêu thương nào đâu hay
      Vì em bây giờ bên ai
      Anh ngẩn ngơ ngồi ôm đắng cay
      Có lúc muốn quên đi
      Sao nước mắt hoen mi
      Anh đã cố lau khô
      Gió lỡ cuốn em đi
      Chắc có lẽ do ai
      Chứ có phải anh mô
      Hai ta bước qua nhau
      Bao khoảnh khắc qua mau
      Sao không nói nên câu
      Chôn vùi dưới đêm thâu
      Và thế là hết rồi
      Khi con tim của anh như vỡ tan
      Âm thanh nơi quán quen
      Đưa lên đôi tay dạo phím đàn
      Anh đã không còn thấy em nở nụ cười
      Thấy ánh mắt rạng ngời
      Yeah
      Oh no
      Và thế là hết rồi
      Khi con tim của em như vỡ đôi
      Hỏi sao anh quá tồi
      Yêu nhưng không dám nói lấy một lời
      Em đã không còn được thấy
      Ánh mắt đôi môi
      Thấy anh trong cuộc đời
      Mọi cảm xúc giờ đây
      Theo gió cuốn trôi về đâu
      Em xinh như hoa với thần thái ice
      Dịu dàng em bước đi vào trong Night Life
      Don't say bye bye, no
      Được nắm đôi tay của em
      Và đi cùng em đến cuối đời
      Em xinh như hoa với thần thái ice
      Dịu dàng em bước đi vào trong Night Life
      Don't say bye bye, no
      Được nắm đôi tay của em
      Và đi cùng em đến cuối đời
      Rõ ràng là em cũng muốn
      Được nắm tay anh mà
      Nhưng để lỡ làng rồi anh đi xa
      Một mình em nơi lạnh giá
      Phải làm sao
      Khi anh không ở đây nghe em ca
      Giờ cầm cây bút
      Viết về cuộc chia tay buồn bã
      I don't want you to go away
      Can you stay for another day
      Phải làm sao để anh ở lại
      Khi vẫn còn trở ngại
      Là ta không dám đỡ lấy cơ hội
      Để được yêu nhau`,
    },
    {
      name: "Tuý Âm",
      singer: " Xesi x Masew x Nhatnguyen",
      path: "./LinkNhac/y2mate.com - Túy Âm  Xesi x Masew x Nhatnguyen (1).mp3",
      image: "./img-chinh/tuy-am.jpg",
      lyrics: `Bài Hát: Túy Âm
      Ca Sĩ: Xesi, Masew, Nhật Nguyễn
      Rót đến tràn ly
      Anh chìm đắm
      Trong men cay đắng nồng
      Khóc chát làn mi
      Uống cùng anh
      Cho đêm nay say chất ngất
      Dẫu năm tháng ấy còn đâu
      Những đam mê ta kiếm tìm
      Màu mắt xanh ngời
      Lạc giữa mây ngàn về chốn xa xôi
      Hãy say cùng anh
      Hãy hát cùng anh
      Hãy khóc cùng anh
      Thêm một lần
      Để anh được gần trái tim của em
      Dù trong phút giây
      Hình bóng người tan biến dần
      Phía sau những nỗi sầu
      Với em chắc quá đủ
      Cho một mối tình
      Dẫu em không thể ở lại với anh
      Mình chẳng cùng với nhau
      Đi hết con đường
      Ôm ấp hi vọng một ngày ngát xanh
      Tháng năm thăng trầm
      Dòng đời ngả nghiêng
      Mình tự rời bỏ nhau
      Say đến điên dại
      Say hết kiếp người
      Say cho cháy lòng
      Dẫu em không thể ở lại với anh
      Mình chẳng cùng với nhau
      Đi hết con đường
      Ôm ấp hi vọng một ngày ngát xanh
      Tháng năm thăng trầm
      Dòng đời ngả nghiêng
      Mình tự rời bỏ nhau
      Say đến điên dại
      Say hết kiếp người
      Say cho cháy lòng
      Dẫu em không thể ở lại với anh
      Mình chẳng cùng với nhau
      Đi hết con đường
      Ôm ấp hi vọng một ngày ngát xanh
      Tháng năm thăng trầm
      Dòng đời ngả nghiêng
      Mình tự rời bỏ nhau
      Say đến điên dại
      Say hết kiếp người
      Say cho cháy lòng`,
    },
    {
      name: "Unstoppable",
      singer: "Sia",
      path: "./LinkNhac/sia-lyrics-vietsub.mp3",
      image: "./img-chinh/unstop.jpg",
      lyrics: `Bài hát: Unstoppable
      Ca sĩ: Sia
      All smiles I know what it takes
      To fool this town
      I'll do it 'til the sun goes down
      And all through the night time
      Oh yeah oh yeah
      I'll tell you what you wanna hear
      Leave my sunglasses
      On while I shed a tear
      It's never the right time
      Yeah yeah
      I put my armor on
      Show you how strong how I am
      I put my armor on
      I'll show you that I am
      I'm unstoppable
      I'm a Porsche with no brakes
      I'm invincible
      Yeah I win every single game
      I'm so powerful
      I don't need batteries to play
      I'm so confident
      Yeah I'm unstoppable today
      Unstoppable today
      Unstoppable today
      Unstoppable today
      I'm unstoppable today
      Break down
      Only alone I will cry out now
      You’ll never see what’s hiding out
      Hiding out deep down
      Yeah yeah
      I know I’ve heard that
      To let your feelings show
      Is the only way
      To make friendships grow
      But I’m too afraid now
      Yeah yeah
      I put my armor on
      Show you how strong how I am
      I put my armor on
      I'll show you that I am
      I'm unstoppable
      I'm a Porsche with no brakes
      I'm invincible
      Yeah I win every single game
      I'm so powerful
      I don't need batteries to play
      I'm so confident
      Yeah I'm unstoppable today
      Unstoppable today
      Unstoppable today
      Unstoppable today
      I'm unstoppable today
      Unstoppable today
      Unstoppable today
      Unstoppable today
      I'm unstoppable today
      I put my armor on
      Show you how strong how I am
      I put my armor on
      I'll show you that I am
      I'm unstoppable
      I'm a Porsche with no brakes
      I'm invincible
      Yeah I win every single game
      I'm so powerful
      I don't need batteries to play
      I'm so confident
      Yeah I'm unstoppable today
      Unstoppable today
      Unstoppable today
      Unstoppable today
      I'm unstoppable today
      Unstoppable today
      Unstoppable today
      Unstoppable today
      I'm unstoppable today`,
    },

    {
      name: "Cao Ốc 20",
      singer: "B Ray x DatG ",
      path: "./LinkNhac/y2mate.com - Cao Ốc 20  B Ray x DatG  Masew Mix .mp3",
      image: "./img-chinh/cao-cp.jpg",
      lyrics: `Mưa sẽ không còn rơi,
      Nước mắt rồi cũng khô, và tim em sẽ không còn đợi,
      Những món quà kỉ niệm, 1 thời gian sẽ không *** tới,
      Và anh sẽ thoáng qua trong tâm trí em là 1 kẻ lạ em gặp ở trong dòng đời,
      Em sẽ quên, quên cả những vị ngọt và đắng,
      Quên ngày đó cả 2 đã thua khi đã chọn mình thắng,
      Quên là anh đáng yêu hay quên là anh đáng hận,
      Quên 1 người đã có thể từng làm em yêu hơn bản thân,
      Quên thứ tình cảm nặng nhất, khi phải đặt lên cán cân,
      Quên vết thương làm em đau nhất, và đem nó nhân vạn lần,
      Quên những lời ca anh viết, từng chi tiết về anh,
      Từng nụ hôn, từng tin nhắn mà anh không biết để dành,
      Em ơi, tất cả nỗi nhớ này để đâu,
      Anh mang theo nó chẳng thể lâu,
      Những thước phim, những câu chuyện tựa như giấc chiêm bao,
      1 ngày nào đó, em sẽ quên là ta đã mất đi nhau.
      
      Và rồi anh cũng sẽ phải nhận ra,
      Em đã đi xa từ hôm qua.
      Và những ký ức lúc trước, sau này chỉ là những điều khác lạ.
      Nói với nhau 1 câu đi, để sau này,
      Ta không lưu luyến đến nhau.
      Vì anh mang theo nỗi nhớ này chẳng thể lâu.
      
      Khi em đi anh dùng thay thế là điếu thuốc lá và cà phê,
      Những buổi tiệc không đường về, và những tin nhắn giờ đã trễ,
      Anh như món đồ thất lạc, không có nơi trả về,
      Nhưng nếu không mất sẽ không tìm, thường thì đời là thế,
      Anh, nghĩ về quá khứ, không tính chuyện tương lai,
      Em không bên anh hiện tại, nhưng vẫn thấy em thường ngày,
      Những thước phim, những lời nhạc cấu xé,
      Những câu chuyện chỉ buồn cười khi ta kể nhau nghe,
      Anh trở về, thành phố này, đều là "đã từng,"
      Mang theo những kỉ niệm giờ em chả cần,
      Mẹ anh nói, đây là nợ, anh phải trả dần,
      Nhưng bao lâu là điều duy nhất mẹ không thể nói ra,
      Đứng trên lầu 20 của tòa cao ốc chỉ để hút cần và ăn tối,
      Với những cô gái nói lời yêu thương khi gặp vài lần là chăn gối,
      Vài người bạn vẫn luôn có mặt, đỡ 1 phần nào tăm tối,
      Những tin nhắn dài anh gửi cho em nhưng anh chưa từng làm văn giỏi,
      Anh chỉ muốn,
      Có những cảm giác mà họ nói,
      Anh muốn 1 lần tự do, muốn 1 lần được bỏ trói,
      Muốn gặp em ngày đó, muốn là anh hôm qua,
      Muốn cảm nhận lời em nói, theo 1 cách nôm na.
      
      Nhưng mà...
      Tất cả nỗi nhớ này để đâu...
      Anh mang theo nó chẳng thể lâu...
      
      Áng mây kia đã quên anh rồi,
      Thành phố sau lưng anh buồn,
      Vậy đâu là điều em muốn?
      Áng mây kia đã quên anh rồi,
      Đừng bắt cơn đau dài thêm,
      Vì anh mang chẳng thể lâu.`,
    },
    {
      name: "Cảm Ơn Đã Tổn Thương",
      singer: "Phạm Nguyên Ngọc",
      path: "./LinkNhac/y2mate.com - 1mic1take Cảm Ơn Tổn Thương  Phạm Nguyên Ngọc.mp3",
      image: "./img-chinh/cam-on-da-ton-thuong.jpg",
      lyrics: `Sao lại khóc?
      Khi giờ chẳng có ai nghe ai buồn lòng…
      Chẳng ai ôm ấp vỗ về
      Tìm bình yên, trong cơn mê
      Sao lại khóc?
      Sao để nước mắt rơi trong đêm một mình
      Lục tìm trong chiếc điện thoại
      Danh bạ chẳng còn tên nhau
      
      Yêu thương kia giờ cũng đã cũ
      Thanh xuân em, trao hết cho người
      Bao nhiêu nốt nhạc, bao nhiêu hi vọng
      Em trao hết anh…
      
      Em vẫn ngỡ rằng người còn đó
      Chiếc áo cũ, vai áo đã sờn
      Năm tháng yêu thương đậm sâu
      Năm tháng tim em quặn đau
      
      Cảm ơn anh đã rời xa em
      Để em biết không gì là mãi mãi
      Cảm ơn anh đã buông vòng tay
      Để em thấy em kiên cường hơn em của hôm qua
      Cảm ơn anh đã bỏ mặc em
      Trong những lúc em cần anh nhất
      Cảm ơn anh dẫu cho ngày mai
      Em không chắc em tìm được ai trên quãng đường dài
      
      Những ngày tháng buồn, chẳng còn anh ở bên
      Em đem thời gian khâu lại hết những tổn thương
      Một bình minh nữa lại đến
      Em thấy lòng nhẹ nhàng hơn
      
      Cảm ơn người vì ít nhất đã đến
      Ôm thật chặt rồi bỏ đi
      Cảm ơn vì mang hết yêu thương
      Và để lại đây những nỗi buồn cũ kĩ
      Cảm ơn vì cái thời hai đứa vụng dại
      Tin vào những điều viển vông
      
      Cảm ơn những đêm tối cô đơn
      Nỗi buồn tràn ra lấp đầy căn phòng trống
      Ta trao cho nhau cơ hội để làm lại
      Dù phải chấp nhận là với bất kì ai
      Nhưng ta biết là sẽ hạnh phúc hơn
      
      Vì đứa trẻ nào thì cũng cần phải lớn
      Em sẽ tìm cho mình một người bạn
      Trao cho họ những nụ hôn
      Còn anh dù là hơi khó khăn
      Nhưng em an tâm, ngày mai anh sẽ ổn
      Mong em hãy quên đi anh…
      
      Quên những đêm, hai đứa vùi mình trong những cãi vã
      Kẻ thắng người thua, kẻ đúng người sai,
      Thì cũng đều từng đau như nhau cả.
      Hãy giữ cho mình những điều trọn vẹn nhất,
      Những chiều hạ buồn thành phố chơi vơi
      Hai trái tim từng một thời dành trọn cho nhau
      Chẳng thể bên nhau đi đến hết cuộc đời…
      
      Em vẫn thế!
      Những ngày không có anh ban mai mỉm cười
      Niềm đau kia đã ngủ vùi
      Dẫu đôi lần vẫn nhói trong tim
      Anh giờ sao?
      Đã tìm ai khác thay em bên đời mình
      Người ta có biết một điều
      Ta đã từng mặn nồng biết bao nhiêu
      
      Yêu thương kia giờ cũng đã cũ
      Thanh xuân em, trao hết cho người
      Bao nhiêu nốt nhạc, bao nhiêu hi vọng
      Em trao hết anh…
      
      Em vẫn ngỡ rằng người còn đó
      Chiếc áo cũ, vai áo đã sờn
      Năm tháng yêu thương đậm sâu
      Năm tháng tim em quặn đau
      
      Cảm ơn anh đã rời xa em
      Để em biết không gì là mãi mãi
      Cảm ơn anh đã buông vòng tay
      Để em thấy em kiên cường hơn em của hôm qua
      Cảm ơn anh đã bỏ mặc em
      Trong những lúc em cần anh nhất
      Cảm ơn anh dẫu cho ngày mai
      Em không chắc em tìm được ai trên quãng đường dài
      
      Những ngày tháng buồn, chẳng còn anh ở bên
      Em đem thời gian khâu lại hết những tổn thương
      Một bình minh nữa lại đến
      Em thấy lòng nhẹ nhàng hơn
      
      Cảm ơn anh đã rời xa em
      Để em biết không gì là mãi mãi
      Cảm ơn anh đã buông vòng tay
      Để em thấy em kiên cường hơn em của hôm qua
      Cảm ơn anh đã bỏ mặc em
      Trong những lúc em cần anh nhất
      Cảm ơn anh dẫu cho ngày mai
      Em không chắc em tìm được ai trên quãng đường dài
      
      Những ngày tháng buồn, chẳng còn anh ở bên
      Em đem thời gian khâu lại hết những tổn thương
      Một bình minh nữa lại đến
      Em thấy lòng nhẹ nhàng hơn
      
      Cảm ơn Anh…`,
    },
  ],
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                <div class="song ${
                  index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
                    <div class="img">
                        <img src="${song.image}" alt="">
                    </div>
                    <div class="musicInfomation">
                        <h3>${song.name}</h3>
                        <p>${song.singer}</p>
                    </div> 
                    <div class="playlistOption">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        <p>${formatTime(song.time)}</p>
                    </div>
                </div>
            `;
    });
    pageList.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    _this = this;

    //Xử lí nút dowload
    dowloadBtn.onclick = function () {
      dowloadBtn.href = `${_this.currentSong.path}`;
    };

    //Xử lí khi click vào nút button
    lyricsBtn.onclick = function () {
      pageLyrics.style.display = "block";
      pageHome.style.display = "none";
      pageList.style.display = "none";
      homeBtn.style.display = "block";
      listBtn.style.display = "none";
      lyricsHeading.textContent = "LYRICS";
      lyricsHeading.style.display = "inline-block";
    };

    //Xử lý nút option chọn dowload or lyrics
    optionHeading.onclick = function () {
      optionMenu.style.display = "block";
    };

    //lắng nghe hành vi khi click vào trang home
    document.addEventListener("click", function (e) {
      if (e.target != optionMenu && e.target != optionHeading) {
        optionMenu.style.display = "none";
      }
    });

    //Xư lý nút list ở trang home
    listBtn.onclick = function () {
      pageHome.style.display = "none";
      pageList.style.display = "block";
      homeBtn.style.display = "block";
      listBtn.style.display = "none";
      playListName.style.display = "block";
      pageLyrics.style.display = "none";
      lyricsHeading.textContent = "MY MUSIC";
    };

    //Xử lý nút back ở trang music
    homeBtn.onclick = function () {
      pageHome.style.display = "block";
      pageList.style.display = "none";
      homeBtn.style.display = "none";
      listBtn.style.display = "block";
      playListName.style.display = "none";
      pageLyrics.style.display = "none";
    };

    //Xử lý nút play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    play2Btn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    //Xử lí nút lùi 5 giây prevTime
    prevTime.onclick = function () {
      audio.currentTime -= 5;
    };

    //Xử lí nút tới 5 giây next
    nextTime.onclick = function () {
      audio.currentTime += 5;
    };

    //Xử lí nút next bài hát
    nextMusic.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
    };

    //Xử lí nút next bài hát
    prevMusic.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
    };

    //Xử lí random bài hát
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      randomBtn.classList.toggle("active", _this.isRandom);
      console.log(_this.isRandom, randomBtn);
    };

    //Xử lí nút repeat bài hát
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    //Xử lí next song khi bài hát kết thúc
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextMusic.click();
      }
    };

    //Khi song được play
    audio.onplay = function () {
      _this.isPlaying = true;
      playPause.classList.add("playing");
      songLive.classList.add("playing");
    };

    //Khi song được pause
    audio.onpause = function () {
      _this.isPlaying = false;
      playPause.classList.remove("playing");
      songLive.classList.remove("playing");
    };

    //Khi tiến độ bài hát được thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
        headingMusicTimeStart.textContent = formatTime(
          Math.floor(audio.currentTime)
        );
      }
    };

    //Khi tua song
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    //lắng nghe hành vi khi click vào playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      songLive.style.display = "flex";
      if (e.target.closest(".song:not(.active)")) {
        _this.currentIndex = Number(songNode.dataset.index);
        _this.loadCurrentSong();
        audio.play();
        _this.render();
        console.log(e.target);
      }
      console.log($(".playlistOption p"));
    };

    //Xử lí nút close tắt tab bên live song
    closeBtn.onclick = function () {
      songLive.style.display = "none";
    };

    //Volumn

    volumnOn.onclick = function () {
      _this.isVolumn = !_this.isVolumn;
      volumnBtn.classList.add("active");
      volumn.value = 0;
    };

    offVolumn.onclick = function () {
      _this.isVolumn = !_this.isVolumn;
      volumnBtn.classList.remove("active");
    };

    volumn.addEventListener("input", function () {
      audio.volume = volumn.valueAsNumber;
      if (audio.volume === 0) {
        volumnBtn.classList.add("active");
      } else {
        volumnBtn.classList.remove("active");
      }
    });

    //Volumn on of
  },
  loadCurrentSong: function () {
    headingMusicName.textContent = this.currentSong.name;
    headingMusicSinger.textContent = this.currentSong.singer;

    headingMusicTime.innerHTML = formatTime(this.currentSong.time);

    headingCdThumb.src = `${this.currentSong.image}`;
    audio.src = this.currentSong.path;

    songLiveName.textContent = this.currentSong.name;
    songLiveSinger.textContent = this.currentSong.singer;

    lyricName.textContent = this.currentSong.name;
    lyricsSinger.textContent = this.currentSong.singer;
    lyrics.textContent = this.currentSong.lyrics;

    dowloadBtn.dataset.custom = `dowload="${this.currentSong.path}"`;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  loadDataAudio: function () {},
  start: function () {
    this.defineProperties();
    this.loadCurrentSong();
    this.handleEvents();
    this.render();
  },
};

app.start();
