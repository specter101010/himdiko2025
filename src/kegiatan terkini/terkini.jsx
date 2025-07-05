import Masonry from "../components/Masonry";

function KegiatanTerkini(){

    const items = [
        {
          id: "1",
          img: "https://picsum.photos/id/1015/600/900?grayscale",
          url: "https://example.com/one",
          height: 400,
        },
        {
          id: "2",
          img: "https://picsum.photos/id/1011/600/750?grayscale",
          url: "https://example.com/two",
          height: 300,
        },
        {
          id: "3",
          img: "https://picsum.photos/id/1020/600/800?grayscale",
          url: "https://example.com/three",
          height: 500,
        },
        {
          id: "4",
          img: "https://picsum.photos/id/1043/600/650?grayscale",
          url: "https://example.com/four",
          height: 300,
        },
        {
          id: "5",
          img: "https://picsum.photos/id/1052/600/700?grayscale",
          url: "https://example.com/five",
          height: 350,
        },
        {
          id: "6",
          img: "https://picsum.photos/id/1062/600/900?grayscale",
          url: "https://example.com/six",
          height: 450,
        },
        {
          id: "7",
          img: "https://picsum.photos/id/1074/600/750?grayscale",
          url: "https://example.com/seven",
          height: 300,
        },
        {
          id: "8",
          img: "https://picsum.photos/id/1084/600/850?grayscale",
          url: "https://example.com/eight",
          height: 420,
        },
        {
          id: "9",
          img: "https://picsum.photos/id/1080/600/800?grayscale",
          url: "https://example.com/nine",
          height: 400,
        },
        {
          id: "10",
          img: "https://picsum.photos/id/109/600/600?grayscale",
          url: "https://example.com/ten",
          height: 300,
        },
      ];
      
    
    return(
        <div>
        <div style={{marginTop:'300px',paddingLeft:"50px"}} className="w-full flex items-center justify-left text-5xl font-[jaro] font-[400] text-[#1e293b]">
        Kegiatan Terkini
        </div>
        <div className="w-full flex justify-center items-center" style={{
            height:"500px",
            padding:"30px",
            marginTop:'50px'
            }}>
            <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
            />
        </div>
        </div>
    )
}

export default KegiatanTerkini;