$(function () {
    var data = {
        menu: [
            {
                name: 'เข้าสู่ระบบ',
                link: 'index.html',
                sub: null
            },
            {
                name: 'Back Office',
                link: '#',
                sub: [
                    {
                        name: 'รายการสั่งซื้อสินค้า',
                        link: 'order.html',
                        sub: null
                    },{
                        name: 'ฟอร์มสั่งซื้อสินค้า',
                        link: 'order_form.html',
                        sub: null
                    }
                    // ,{
                    //     name: 'Google Multiple Route',
                    //     link: 'google.html',
                    //     sub: null
                    // }
                ]
            },
            {
                name: 'ระบบการส่งสินค้า',
                link: '#',
                sub: [
                    {
                        name: 'รายการส่งสินค้า',
                        link: 'send.html',
                        sub: null
                    },
                    {
                        name: 'ฟอร์มบันทึกการส่งสินค้า',
                        link: 'order_send.html',
                        sub: null
                    },
                    {
                        name: 'เส้นทางการเดินรถ',
                        link: 'way.html',
                        sub: null
                    }
                ]
            },
            {
                name: 'ระบบสมาชิก',
                link: '#',
                sub: [
                    // {
                    //     name: 'แก้ไขข้อมูลส่วนตัว',
                    //     link: 'editprofile.html',
                    //     sub: null
                    // },
                    {
                        name: 'ระบบจัดการกลุ่มผู้ใช้งาน',
                        link: 'user_group.html',
                        sub: null
                    },{
                        name: 'ระบบจัดการผู้ใช้งาน',
                        link: 'user.html',
                        sub: null
                    },{
                        name: 'ระบบเติมเครดิต',
                        link: 'payment.html',
                        sub: null
                    }
                ]
            },{
                name: 'ระบบจัดการสินค้า',
                link: '#',
                sub: [
                    {
                        name: 'ระบบจัดการสินค้า',
                        link: 'product.html',
                        sub: null
                    },{
                        name: 'ระบบตรวจสอบยอดเข้าออกสินค้า',
                        link: 'product_transaction.html',
                        sub: null
                    },{
                        name: 'ประเภทสินค้า',
                        link: 'product_type.html',
                        sub: null
                    }
                ]
            },{
                name: 'ข้อมูลพื้นฐาน',
                link: '#',
                sub: [
                    {
                        name: 'ประเภทคำสั่งซื้อ',
                        link: 'order_type.html',
                        sub: null
                    },{
                        name: 'รถบรรทุกสินค้า',
                        link: 'truck.html',
                        sub: null
                    },
                ]
            },{
                name: 'ออกจากระบบ',
                link: '#',
                sub: null
            }
        ]
    };

    var str = "";
    $.each(data.menu, function (key, value) {

        if (value.sub == null) {
            str +=
                `<li class="d-flex flex-column">
                <a class="nav-link" href="` + value.link + `">
                    <i class="nav-icon fas fa-sliders-h"></i>
                    <p>` + value.name + `</p>
                </a>
            </li>`;
        } else {
            str +=
                `<li class="d-flex flex-column">
                    <a class="nav-link" href="#tables` + key + `" aria-expanded="false" class="nav-link" data-toggle="collapse">
                        <i class="nav-icon fas fa-cogs"></i>
                        <p>` + value.name + `
                            <i class="fa fa-sort-desc submenu-toggle"></i>
                        </p>
                    </a>
                    <div class="collapse show" id="tables` + key + `" role="navigation" aria-expanded="false">
                        <ul class="nav flex-column ps-container ps-theme-default">`
            $.each(value.sub, function (keyin, valuein) {
                str +=
                            `<li class="d-flex flex-column">
                                <a class="nav-link" href="` + valuein.link + `">` + valuein.name + `</a>
                            </li>`;
            });
            str += `    </ul>
                    </div>
                </li></a>
            </li>`;
        }
    });
    $("#menu").append(str);
    str = null;
});

$(document).ready(function() {

    $('#minimizeSidebar').click(function () { 
        var tgc = $("#minimizeSidebar").find("li");
        if(tgc.length=="ti-arrow-left"){
            $(".collapse").removeClass("show");
            tgc.removeClass("ti-arrow-left");
            tgc.addClass("ti-arrow-right");
        }else{
            $(".collapse").removeClass("show");
            tgc.removeClass("ti-arrow-right");
            tgc.addClass("ti-arrow-left");
        }
    });
})
