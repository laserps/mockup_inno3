$(function () {
    var data = {
        menu: [
          {
              name: 'ผู้ใช้งาน',
              link: '#',
              sub: [
                  {
                      name: 'ข้อมูลผุ้ใช้งาน',
                      link: 'profile.html',
                      sub: null
                  }
              ]
          }, {
                name: 'คำสั่งซื้อ',
                link: 'customer_group.html',
                sub: null
            }, {
                name: 'ระบบบันทึกการส่งสินค้า',
                link: 'customer_group.html',
                sub: null
            },
            {
                name: 'ระบบจัดการสินค้า',
                link: 'product.html',
                sub: null
            }, {
                name: 'ระบบจัดการบัญชี',
                link: 'account.html',
                sub: null
            }, {
                name: 'ระบบจัดการกลุ่มลูกค้า',
                link: 'customer_group.html',
                sub: null
            }, {
                name: 'ระบบจัดการกลุ่มผู้ใช้งาน',
                link: 'customer_group.html',
                sub: null
            }, {
                name: 'ระบบจัดการผู้ใช้งาน',
                link: 'customer_group.html',
                sub: null
            },{
                name: 'ระบบจัดการตารางเวลาส่งสินค้า',
                link: 'customer_group.html',
                sub: null
            }
            ,
            {
                name: 'ตั้งค่าระบบ',
                link: '#',
                sub: [
                    {
                        name: 'ตั้งค่าเวลาเดินรถ',
                        link: 'truck_plan.html',
                        sub: null
                    }
                ]
            }
            ,
            {
                name: 'ข้อมูลพื้นฐาน',
                link: '#',
                sub: [
                    {
                        name: 'ประเภทคำสั่งซื้อ',
                        link: 'order_type.html',
                        sub: null
                    },{
                        name: 'ประเภทสินค้า',
                        link: 'product_type.html',
                        sub: null
                    },{
                        name: 'รถบรรทุกสินค้า',
                        link: 'truck.html',
                        sub: null
                    },{
                        name: 'PAYMENT GATEWAY',
                        link: 'bank.html',
                        sub: null
                    }
                ]
            }
        ]
    };

    var str = "";
    $.each(data.menu, function (key, value) {

        // <li class="d-flex flex-column active">
        //     <a class="nav-link" href="../widgets/widgets.html">
        //         <i class="nav-icon fas fa-cog"></i>
        //         <p>Widgets</p>
        //     </a>
        // </li>

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
                    <a class="nav-link" href="#tables` + key + `" aria-expanded="false" class="nav-link collapsed" data-toggle="collapse">
                        <i class="nav-icon fas fa-cogs"></i>
                        <p>` + value.name + `
                            <i class="fa fa-sort-desc submenu-toggle"></i>
                        </p>
                    </a>
                    <div class="collapse" id="tables` + key + `" role="navigation" aria-expanded="false">
                        <ul class="nav flex-column ps-container ps-theme-default">`
            $.each(value.sub, function (keyin, valuein) {
                str +=
                            `<li class="d-flex flex-column">
                                <a class="nav-link" href="` + valuein.link + `"><i class="far fas fa-cog"></i> ` + valuein.name + `</a>
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
