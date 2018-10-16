<template>
  <div class="container">
    <!-- <p>{{ title }}</p> -->
    <div>
      <section>
        <h1>目標</h1>
        <h2 class="title_target">{{(parseInt(imw_month_target)+parseInt(il_month_target)+parseInt(pp_month_target)+parseInt(mi_month_target)+parseInt(bb_month_target)+parseInt(ha_month_target)+parseInt(imm_month_target)+parseInt(hp_month_target))}}</h2>
        <table id="mytable" class="table-bordered table-condensed">
          <thead>
            <tr>
              <th>品牌</th>
              <th>月目標</th>
              <th>今日</th>
              <th>月累積</th>
              <th>尚差</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0px 8px 0px 8px;">IMW</td>
              <td>
                <input id="imw_month_target" size="14" type="text" v-model="imw_month_target">
              </td>
              <td>
                <input id="imw_today_target" size="14" type="text" v-model="imw_today_target">
              </td>
              <td>
                <input id="imw_now_total" size="14" type="text" v-model="imw_now_total">
              </td>
              <td class="imw_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(imw_today_target)+parseInt(imw_now_total))-parseInt(imw_month_target)}}
              </td>
            </tr>
            <tr>
              <td>IL</td>
              <td>
                <input id="il_month_target" size="14" type="text" v-model="il_month_target">
              </td>
              <td>
                <input id="il_today_target" size="14" type="text" v-model="il_today_target">
              </td>
              <td>
                <input id="il_now_total" size="14" type="text" v-model="il_now_total">
              </td>
              <td class="il_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(il_today_target)+parseInt(il_now_total))-parseInt(il_month_target)}}
              </td>
            </tr>
            <tr>
              <td>PP</td>
              <td>
                <input id="pp_month_target" size="14" type="text" v-model="pp_month_target">
              </td>
              <td>
                <input id="pp_today_target" size="14" type="text" v-model="pp_today_target">
              </td>
              <td>
                <input id="pp_now_total" size="14" type="text" v-model="pp_now_total">
              </td>
              <td class="pp_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(pp_today_target)+parseInt(pp_now_total))-parseInt(pp_month_target)}}
              </td>
            </tr>
            <tr>
              <td>MI</td>
              <td>
                <input id="mi_month_target" size="14" type="text" v-model="mi_month_target">
              </td>
              <td>
                <input id="mi_today_target" size="14" type="text" v-model="mi_today_target">
              </td>
              <td>
                <input id="mi_now_total" size="14" type="text" v-model="mi_now_total">
              </td>
              <td class="mi_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(mi_today_target)+parseInt(mi_now_total))-parseInt(mi_month_target)}}
              </td>
            </tr>
            <tr>
              <td>BB</td>
              <td>
                <input id="bb_month_target" size="14" type="text" v-model="bb_month_target">
              </td>
              <td>
                <input id="bb_today_target" size="14" type="text" v-model="bb_today_target">
              </td>
              <td>
                <input id="bb_now_total" size="14" type="text" v-model="bb_now_total">
              </td>
              <td class="bb_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(bb_today_target)+parseInt(bb_now_total))-parseInt(bb_month_target)}}
              </td>
            </tr>
            <tr>
              <td>HA</td>
              <td>
                <input id="ha_month_target" size="14" type="text" v-model="ha_month_target">
              </td>
              <td>
                <input id="ha_today_target" size="14" type="text" v-model="ha_today_target">
              </td>
              <td>
                <input id="ha_now_total" size="14" type="text" v-model="ha_now_total">
              </td>
              <td class="ha_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(ha_today_target)+parseInt(ha_now_total))-parseInt(ha_month_target)}}
              </td>
            </tr>
            <tr>
              <td>IMM</td>
              <td>
                <input id="imm_month_target" size="14" type="text" v-model="imm_month_target">
              </td>
              <td>
                <input id="imm_today_target" size="14" type="text" v-model="imm_today_target">
              </td>
              <td>
                <input id="imm_now_total" size="14" type="text" v-model="imm_now_total">
              </td>
              <td class="imm_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(imm_today_target)+parseInt(imm_now_total))-parseInt(imm_month_target)}}
              </td>
            </tr>
            <tr>
              <td>HP</td>
              <td>
                <input id="hp_month_target" size="14" type="text" v-model="hp_month_target">
              </td>
              <td>
                <input id="hp_today_target" size="14" type="text" v-model="hp_today_target">
              </td>
              <td>
                <input id="hp_now_total" size="14" type="text" v-model="hp_now_total">
              </td>
              <td class="hp_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(hp_today_target)+parseInt(hp_now_total))-parseInt(hp_month_target)}}
              </td>
            </tr>
            <tr>
              <td>總計</td>
              <td id="all_month_target">
                {{(parseInt(imw_month_target)+parseInt(il_month_target)+parseInt(pp_month_target)+parseInt(mi_month_target)+parseInt(bb_month_target)+parseInt(ha_month_target)+parseInt(imm_month_target)+parseInt(hp_month_target))}}
              </td>
              <td id="all_today_target">
                {{(parseInt(imw_today_target)+parseInt(il_today_target)+parseInt(pp_today_target)+parseInt(mi_today_target)+parseInt(bb_today_target)+parseInt(ha_today_target)+parseInt(imm_today_target)+parseInt(hp_today_target))}}
              </td>
              <td id="all_now_total">
                {{(parseInt(imw_now_total)+parseInt(il_now_total)+parseInt(pp_now_total)+parseInt(mi_now_total)+parseInt(bb_now_total)+parseInt(ha_now_total)+parseInt(imm_now_total)+parseInt(hp_now_total))}}
              </td>
              <td id="all_diff">
                {{(parseInt(imw_today_target)+parseInt(imw_now_total))-parseInt(imw_month_target)+(parseInt(il_today_target)+parseInt(il_now_total))-parseInt(il_month_target)+(parseInt(pp_today_target)+parseInt(pp_now_total))-parseInt(pp_month_target)+(parseInt(mi_today_target)+parseInt(mi_now_total))-parseInt(mi_month_target)+(parseInt(bb_today_target)+parseInt(bb_now_total))-parseInt(bb_month_target)+(parseInt(ha_today_target)+parseInt(ha_now_total))-parseInt(ha_month_target)+(parseInt(imm_today_target)+parseInt(imm_now_total))-parseInt(imm_month_target)+(parseInt(hp_today_target)+parseInt(hp_now_total))-parseInt(hp_month_target)}}
              </td>
            </tr>
            <tr>
              <td>季目標</td>
              <td>
                <hr/>
              </td>
              <td>
                <input id="season_target" size="14" type="text" v-model="season_target">
              </td>
              <td>
                <input id="season_total" size="14" type="text" v-model="season_total">
              </td>
              <td class="season_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(season_total))-parseInt(season_target)}}
              </td>
            </tr>
            <tr>
              <td>年目標</td>
              <td>
                <hr/>
              </td>
              <td>
                <input id="year_target" size="14" type="text" v-model="year_target">
              </td>
              <td>
                <input id="year_total" size="14" type="text" v-model="year_total">
              </td>
              <td class="year_diff" style="text-align: center; vertical-align: middle; color:red;">
                {{(parseInt(year_total))-parseInt(year_target)}}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

import axios from 'axios'
// ok 
import { DB } from '@/services/fireinit.js'
var abcc = ""


export default {

  mounted: () => {
    // jQuery code

    // 判斷正負數並格式化金額
    function numberFormat(number) {
      if (number == Math.abs(number)) {
        number = parseInt(number);
        // 正數
        number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        number = "+" + number.toString();
        return number;

      } else {
        number = parseInt(number);
        // 負數
        number = Math.abs(number);
        number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        number = "-" + number.toString();
        return number;
      }
    }



    // 金額去除逗號 輸出字串
    function strFormatDol(str) {
      return str.toString().replace(/,/g, "");
    }

    // 金額格式化成三節一點 輸出字串
    function strFormatPrice(str) {
      return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 讓所有的diff都格式化
    function diffFormat() {

      $('#imw_today_target,#imw_now_total,#imw_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#imw_month_target').val()));
        var price_today = parseInt(strFormatDol($('#imw_today_target').val()));
        var price_now = parseInt(strFormatDol($('#imw_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.imw_diff').html())) {
          $('.imw_diff').html("0");
        }

        $('.imw_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });



      $('#il_today_target,#il_now_total,#il_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#il_month_target').val()));
        var price_today = parseInt(strFormatDol($('#il_today_target').val()));
        var price_now = parseInt(strFormatDol($('#il_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.il_diff').html())) {
          $('.il_diff').html("0");
        }

        $('.il_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });



      $('#pp_today_target,#pp_now_total,#pp_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#pp_month_target').val()));
        var price_today = parseInt(strFormatDol($('#pp_today_target').val()));
        var price_now = parseInt(strFormatDol($('#pp_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.pp_diff').html())) {
          $('.pp_diff').html("0");
        }

        $('.pp_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });



      $('#mi_today_target,#mi_now_total,#mi_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#mi_month_target').val()));
        var price_today = parseInt(strFormatDol($('#mi_today_target').val()));
        var price_now = parseInt(strFormatDol($('#mi_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.mi_diff').html())) {
          $('.mi_diff').html("0");
        }

        $('.mi_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });



      $('#bb_today_target,#bb_now_total,#bb_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#bb_month_target').val()));
        var price_today = parseInt(strFormatDol($('#bb_today_target').val()));
        var price_now = parseInt(strFormatDol($('#bb_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.bb_diff').html())) {
          $('.bb_diff').html("0");
        }

        $('.bb_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });



      $('#ha_today_target,#ha_now_total,#ha_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#ha_month_target').val()));
        var price_today = parseInt(strFormatDol($('#ha_today_target').val()));
        var price_now = parseInt(strFormatDol($('#ha_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.ha_diff').html())) {
          $('.ha_diff').html("0");
        }

        $('.ha_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });



      $('#imm_today_target,#imm_now_total,#imm_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#imm_month_target').val()));
        var price_today = parseInt(strFormatDol($('#imm_today_target').val()));
        var price_now = parseInt(strFormatDol($('#imm_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.imm_diff').html())) {
          $('.imm_diff').html("0");
        }

        $('.imm_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });



      $('#hp_today_target,#hp_now_total,#hp_month_target').keyup(function() {
        var price_month = parseInt(strFormatDol($('#hp_month_target').val()));
        var price_today = parseInt(strFormatDol($('#hp_today_target').val()));
        var price_now = parseInt(strFormatDol($('#hp_now_total').val()));
        var val = (price_today + price_now) - price_month;

        if (isNaN($('.hp_diff').html())) {
          $('.hp_diff').html("0");
        }

        $('.hp_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });


      $('#season_target,#season_total').keyup(function() {
        var season_target = parseInt(strFormatDol($('#season_target').val()));
        var season_total = parseInt(strFormatDol($('#season_total').val()));
        
        var val = season_total - season_target;

        if (isNaN($('.season_diff').html())) {
          $('.season_diff').html("0");
        }

        $('.season_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });


      $('#year_target,#year_total').keyup(function() {
        var year_target = parseInt(strFormatDol($('#year_target').val()));
        var year_total = parseInt(strFormatDol($('#year_total').val()));
        
        var val = year_total - year_target;

        if (isNaN($('.year_diff').html())) {
          $('.year_diff').html("0");
        }

        $('.year_diff').html(numberFormat(val));

        $(':input').each(function() {
          var num = this.value.toString().replace(/,/g, "");
          this.value = parseInt(num).toLocaleString('en-US');

          // input如果有NaN 直接轉0
          if (this.value == "NaN") {
            this.value = "0"
          }
        });
      });


    }


    function setNowTotal() {
      $('#imw_now_total,#il_now_total,#pp_now_total,#mi_now_total,#bb_now_total,#ha_now_total,#imm_now_total,#hp_now_total').keyup(function() {
        var imw_now_total = parseInt(strFormatDol($('#imw_now_total').val()));
        var il_now_total = parseInt(strFormatDol($('#il_now_total').val()));
        var pp_now_total = parseInt(strFormatDol($('#pp_now_total').val()));
        var mi_now_total = parseInt(strFormatDol($('#mi_now_total').val()));
        var bb_now_total = parseInt(strFormatDol($('#bb_now_total').val()));
        var ha_now_total = parseInt(strFormatDol($('#ha_now_total').val()));
        var imm_now_total = parseInt(strFormatDol($('#imm_now_total').val()));
        var hp_now_total = parseInt(strFormatDol($('#hp_now_total').val()));

        var number = imw_now_total + il_now_total + pp_now_total + mi_now_total + bb_now_total + ha_now_total + imm_now_total + hp_now_total;
        $('#all_now_total').html(strFormatPrice(strFormatDol(number)));
      });
    }

    function setTodayTotal() {
      $('#imw_today_target,#il_today_target,#pp_today_target,#mi_today_target,#bb_today_target,#ha_today_target,#imm_today_target,#hp_today_target').keyup(function() {
        var imw_today_target = parseInt(strFormatDol($('#imw_today_target').val()));
        var il_today_target = parseInt(strFormatDol($('#il_today_target').val()));
        var pp_today_target = parseInt(strFormatDol($('#pp_today_target').val()));
        var mi_today_target = parseInt(strFormatDol($('#mi_today_target').val()));
        var bb_today_target = parseInt(strFormatDol($('#bb_today_target').val()));
        var ha_today_target = parseInt(strFormatDol($('#ha_today_target').val()));
        var imm_today_target = parseInt(strFormatDol($('#imm_today_target').val()));
        var hp_today_target = parseInt(strFormatDol($('#hp_today_target').val()));

        var number = imw_today_target + il_today_target + pp_today_target + mi_today_target + bb_today_target + ha_today_target + imm_today_target + hp_today_target;
        $('#all_today_target').html(strFormatPrice(strFormatDol(number)));
      });
    }

    function setMonthTotal() {
      $('#imw_month_target,#il_month_target,#pp_month_target,#mi_month_target,#bb_month_target,#ha_month_target,#imm_month_target,#hp_month_target').keyup(function() {
        var imw_month_target = parseInt(strFormatDol($('#imw_month_target').val()));
        var il_month_target = parseInt(strFormatDol($('#il_month_target').val()));
        var pp_month_target = parseInt(strFormatDol($('#pp_month_target').val()));
        var mi_month_target = parseInt(strFormatDol($('#mi_month_target').val()));
        var bb_month_target = parseInt(strFormatDol($('#bb_month_target').val()));
        var ha_month_target = parseInt(strFormatDol($('#ha_month_target').val()));
        var imm_month_target = parseInt(strFormatDol($('#imm_month_target').val()));
        var hp_month_target = parseInt(strFormatDol($('#hp_month_target').val()));

        var number = imw_month_target + il_month_target + pp_month_target + mi_month_target + bb_month_target + ha_month_target + imm_month_target + hp_month_target;
        $('#all_month_target').html(strFormatPrice(strFormatDol(number)));
      });
    }


    function setDiffTotal() {

      $(':input').keyup(function() {

        var imw_diff = parseInt(strFormatDol($('.imw_diff').html()));
        var il_diff = parseInt(strFormatDol($('.il_diff').html()));
        var pp_diff = parseInt(strFormatDol($('.pp_diff').html()));
        var mi_diff = parseInt(strFormatDol($('.mi_diff').html()));
        var bb_diff = parseInt(strFormatDol($('.bb_diff').html()));
        var ha_diff = parseInt(strFormatDol($('.ha_diff').html()));
        var imm_diff = parseInt(strFormatDol($('.imm_diff').html()));
        var hp_diff = parseInt(strFormatDol($('.hp_diff').html()));

        var number = imw_diff + il_diff + pp_diff + mi_diff + bb_diff + ha_diff + imm_diff + hp_diff;
        $('#all_diff').html(strFormatPrice(strFormatDol(number)));
      });

      $(':input').keyup(function() {

        var imw_diff = parseInt(strFormatDol($('.imw_diff').html()));
        var il_diff = parseInt(strFormatDol($('.il_diff').html()));
        var pp_diff = parseInt(strFormatDol($('.pp_diff').html()));
        var mi_diff = parseInt(strFormatDol($('.mi_diff').html()));
        var bb_diff = parseInt(strFormatDol($('.bb_diff').html()));
        var ha_diff = parseInt(strFormatDol($('.ha_diff').html()));
        var imm_diff = parseInt(strFormatDol($('.imm_diff').html()));
        var hp_diff = parseInt(strFormatDol($('.hp_diff').html()));

        var number = imw_diff + il_diff + pp_diff + mi_diff + bb_diff + ha_diff + imm_diff + hp_diff;
        $('#all_diff').html(strFormatPrice(strFormatDol(number)));
      });
    }

    
      // 更新firebase資料
    function saveUpdateData() {
      $('#imw_month_target').keyup(function() {
        DB.ref('month_target').child('imw').set(strFormatDol(this.value.toString()));
      });

      $('#il_month_target').keyup(function() {
        DB.ref('month_target').child('il').set(strFormatDol(this.value.toString()));
      });

      $('#pp_month_target').keyup(function() {
        DB.ref('month_target').child('pp').set(strFormatDol(this.value.toString()));
      });

      $('#mi_month_target').keyup(function() {
        DB.ref('month_target').child('mi').set(strFormatDol(this.value.toString()));
      });

      $('#bb_month_target').keyup(function() {
        DB.ref('month_target').child('bb').set(strFormatDol(this.value.toString()));
      });

      $('#ha_month_target').keyup(function() {
        DB.ref('month_target').child('ha').set(strFormatDol(this.value.toString()));
      });

      $('#imm_month_target').keyup(function() {
        DB.ref('month_target').child('imm').set(strFormatDol(this.value.toString()));
      });

      $('#hp_month_target').keyup(function() {
        DB.ref('month_target').child('hp').set(strFormatDol(this.value.toString()));
      });





      $('#imw_today_target').keyup(function() {
        DB.ref('today_target').child('imw').set(strFormatDol(this.value.toString()));
      });
      $('#il_today_target').keyup(function() {
        DB.ref('today_target').child('il').set(strFormatDol(this.value.toString()));
      });
      $('#pp_today_target').keyup(function() {
        DB.ref('today_target').child('pp').set(strFormatDol(this.value.toString()));
      });
      $('#mi_today_target').keyup(function() {
        DB.ref('today_target').child('mi').set(strFormatDol(this.value.toString()));
      });
      $('#bb_today_target').keyup(function() {
        DB.ref('today_target').child('bb').set(strFormatDol(this.value.toString()));
      });
      $('#ha_today_target').keyup(function() {
        DB.ref('today_target').child('ha').set(strFormatDol(this.value.toString()));
      });
      $('#imm_today_target').keyup(function() {
        DB.ref('today_target').child('imm').set(strFormatDol(this.value.toString()));
      });
      $('#hp_today_target').keyup(function() {
        DB.ref('today_target').child('hp').set(strFormatDol(this.value.toString()));
      });
      



      $('#imw_now_total').keyup(function() {
        DB.ref('now_total').child('imw').set(strFormatDol(this.value.toString()));
      });
      $('#il_now_total').keyup(function() {
        DB.ref('now_total').child('il').set(strFormatDol(this.value.toString()));
      });
      $('#pp_now_total').keyup(function() {
        DB.ref('now_total').child('pp').set(strFormatDol(this.value.toString()));
      });
      $('#mi_now_total').keyup(function() {
        DB.ref('now_total').child('mi').set(strFormatDol(this.value.toString()));
      });
      $('#bb_now_total').keyup(function() {
        DB.ref('now_total').child('bb').set(strFormatDol(this.value.toString()));
      });
      $('#ha_now_total').keyup(function() {
        DB.ref('now_total').child('ha').set(strFormatDol(this.value.toString()));
      });
      $('#imm_now_total').keyup(function() {
        DB.ref('now_total').child('imm').set(strFormatDol(this.value.toString()));
      });
      $('#hp_now_total').keyup(function() {
        DB.ref('now_total').child('hp').set(strFormatDol(this.value.toString()));
      });



      $('#season_target').keyup(function() {
        DB.ref('season').child('season_target').set(strFormatDol(this.value.toString()));
      });
      $('#season_total').keyup(function() {
        DB.ref('season').child('season_total').set(strFormatDol(this.value.toString()));
      });
      $('#year_target').keyup(function() {
        DB.ref('year').child('year_target').set(strFormatDol(this.value.toString()));
      });
      $('#year_total').keyup(function() {
        DB.ref('year').child('year_total').set(strFormatDol(this.value.toString()));
      });
    }

    $(document).ready(function() {


      // 格式化 input讀取時
      $(':input').each(function() {

        //無法輸入0~9以外的值
        var num = this.value.replace(/[^0-9\.-]/g, '');

        // 輸入最大數 10E
        this.value = parseInt(num).toLocaleString('en-US');
        if (num > 1000000000) {
          this.value = "1,000,000,000"
          return;
        }

        // input如果有NaN 直接轉0
        if (this.value == "NaN") {
          this.value = "0"
        }
      });


      // 格式化 input輸入時
      $(':input').keyup(function() {

        //無法輸入0~9以外的值
        var num = this.value.replace(/[^0-9\.-]/g, '');

        // 輸入最大數 10E
        this.value = parseInt(num).toLocaleString('en-US');
        if (num > 1000000000) {
          this.value = "1,000,000,000"
          return;
        }

        // input如果有NaN 直接轉0
        if (this.value == "NaN") {
          this.value = "0"
        }


      });

      // 格式化 差額
      $('.imw_diff,.il_diff,.pp_diff,.mi_diff,.bb_diff,.ha_diff,.imm_diff,.hp_diff,.season_diff,.year_diff').each(function() {
        var _val = $(this).html();
        _val = parseInt(_val);
        $(this).html(numberFormat(_val));
      });


      // 格式化 目標金額
      $('.title_target').each(function() {
        var number = $(this).html();
        $(this).html(strFormatPrice(strFormatDol(number)));
      });

      // 格式化 目標金額
      $('#all_diff').each(function() {
        var number = $(this).html();
        $(this).html(strFormatPrice(strFormatDol(number)));
      });

      diffFormat();

      $('#all_month_target,#all_today_target,#all_now_total').each(function() {
        var number = $(this).html();
        $(this).html(strFormatPrice(strFormatDol(number)));
      });

      // imw_now_total+il_now_total+pp_now_total+mi_now_total+bb_now_total+ha_now_total+imm_now_total+hp_now_total

      setNowTotal();
      setMonthTotal();
      setTodayTotal();
      setDiffTotal();

      saveUpdateData();


      // $('#all_today_target').each(function() {
      //   var number = $(this).html();
      //   $(this).html(strFormatPrice(strFormatDol(number)));
      // });

      // $('#all_now_total').each(function() {
      //   var number = $(this).html();
      //   alert(number);
      //   $(this).html(strFormatPrice(strFormatDol(number)));
      // });

      // <td id="all_diff">




    });
  },
  data() {
    return {
      name: ""
    }
  },
  async asyncData() {
    //偵錯
    return axios.get('https://sherrywork-bb2ec.firebaseio.com/.json').then((res) => {
        return {
          imw_month_target: res.data.month_target.imw,
          imw_today_target: res.data.today_target.imw,
          imw_now_total: res.data.now_total.imw,
          il_month_target: res.data.month_target.il,
          il_today_target: res.data.today_target.il,
          il_now_total: res.data.now_total.il,
          pp_month_target: res.data.month_target.pp,
          pp_today_target: res.data.today_target.pp,
          pp_now_total: res.data.now_total.pp,
          mi_month_target: res.data.month_target.mi,
          mi_today_target: res.data.today_target.mi,
          mi_now_total: res.data.now_total.mi,
          bb_month_target: res.data.month_target.bb,
          bb_today_target: res.data.today_target.bb,
          bb_now_total: res.data.now_total.bb,
          ha_month_target: res.data.month_target.ha,
          ha_today_target: res.data.today_target.ha,
          ha_now_total: res.data.now_total.ha,
          imm_month_target: res.data.month_target.imm,
          imm_today_target: res.data.today_target.imm,
          imm_now_total: res.data.now_total.imm,
          hp_month_target: res.data.month_target.hp,
          hp_today_target: res.data.today_target.hp,
          hp_now_total: res.data.now_total.hp,
          season_target:res.data.season.season_target,
          season_total:res.data.season.season_total,
          year_target:res.data.year.year_target,
          year_total:res.data.year.year_total
        }
      }).catch((e) => {
          error({ statusCode: 404, message: '資料接收錯誤' })
        })

      },
      methods: {

        editItem() {
          if (this.val().length() > 2) {
            alert("132")
          }
        }
        // additem() {
        //   // let scoreTemp = [{"title": txt1,"url": txt2},{"title": txt3,"url": txt4}]
        //   let scoreTemp = [{ "title": this.txt1, "url": this.txt2 }, { "title": this.txt3, "url": this.txt4 }]

        //   DB.ref('score').set(scoreTemp)

        //   if (this.text0.length > 2) {}
        // }
      }
  }

</script>
<style>
.container {
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
}

input {
  text-align: center;
}

table tr td:nth-child(2) input {
  color: red;
}

.title_target {
  color: red;
}

</style>
