function tinhngay(){
    let thang = +document.getElementById("thang").value;
    let tongngay = ""
         switch(thang) {
             case 1:
             case 3:
             case 5:
             case 7:  
             case 8:
             case 10:
             case 12:
                 tongngay = "31 ngày";
                 break;
             case 2:
                 tongngay = "28 hoặc 29 ngày";
                 break;
             case 4:
             case 6:
             case 9:
             case 11:
                 tongngay = "30 ngày";
                 break;
             default:
                 tongngay =" Xin vui lòng nhập lại! " ; 
         }
document.getElementById("tongngay").innerHTML= tongngay ;
}
