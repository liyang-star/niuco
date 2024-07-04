@extends('admin._layoutNew')
@section('page-head')

@stop
@section('page-content')
    <!-- <iframe src="https://w1.aexcoin.top/mobile/dataMap.html?heyueId=2&legal_id=3&currency_id=1&symbol=BTC/USDT" width="100%" frameborder="0" scrolling="no" id="test" onload="this.height=100"></iframe> -->

    <div class="larry-personal-body clearfix">
        <form class="layui-form col-lg-5">
            <div class="layui-form-item">
                <div class="layui-input-block">
                <label >选择货币：</label>
                <select id="currency" name="currency">
                    <option id="0" value="BTC.USDT">BTC/USDT</option>
                    <!-- <option id="1" value="ETH.USDT">ETH/USDT</option>
                    <option id="2" value="XRP.USDT">XRP/USDT</option>
                    <option id="3" value="LTC.USDT">LTC/USDT</option>
                    <option id="4" value="EOS.USDT">EOS/USDT</option>
                    <option id="5" value="YMT.USDT">YMT/USDT</option>
                    <option id="6" value="BCH.USDT">BCH/USDT</option>
                    <option id="7" value="ETC.USDT">ETC/USDT</option>
                    <option id="8" value="HT.USDT">HT/USDT</option>
                    <option id="9" value="QTUM.USDT">QTUM/USDT</option>
                    <option id="10" value="IOTA.USDT">IOTA/USDT</option>
                    <option id="11" value="NEO.USDT">NEO/USDT</option>
                    <option id="12" value="NAS.USDT">NAS/USDT</option>
                    <option id="13" value="ELA.USDT">ELA/USDT</option>
                    <option id="14" value="SNT.USDT">SNT/USDT</option>
                    <option id="15" value="WICC.USDT">WICC/USDT</option>
                    <option id="16" value="UNC.USDT">UNC/USDT</option>
                    <option id="17" value="AUTU.USDT">AUTU/USDT</option>
                    <option id="18" value="TON.USDT">TON/USDT</option>
                    <option id="19" value="GRTC.USDT">GRTC/USDT</option>
                    <option id="20" value="TRX.USDT">TRX/USDT</option>
                    <option id="21" value="HASH.USDT">HASH/USDT</option>
                    <option id="22" value="KKCC.USDT">KKCC/USDT</option>
                    <option id="23" value="GOLD.USDT">GOLD/USDT</option>
                    <option id="24" value="DOGE.USDT">DOGE/USDT</option>
                    <option id="25" value="OPPO.USDT">OPPO/USDT</option>
                    <option id="26" value="SHIB.USDT">SHIB/USDT</option>
                    <option id="27" value="DEEP.USDT">DEEP/USDT</option>
                    <option id="28" value="USDC.USDT">USDC/USDT</option> -->
                </select>
                   数值（拉跌使用负数，例如：-10）： <input class="layui-input" lay-verify="1" placeholder="" name="setkline" type="text" onkeyup="" value="@if(isset($setkline)){{$setkline ?? ''}}@endif">
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit lay-filter="website_submit">立即提交</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                </div>
            </div>
        </form>
    </div>
@stop
@section('scripts')
    <script type="text/javascript">
        layui.use(['form','upload','layer'], function () {
            var layer = layui.layer;
            var form = layui.form;
            var $ = layui.$;
            form.on('submit(website_submit)', function (data) {
                var data = data.field;
                $.ajax({
                    url: '/admin/setting/setkline',
                    type: 'post',
                    dataType: 'json',
                    data: data,
                    success: function (res) {
                        layer.msg(res.message);
                    }
                });
                return false;
            });

        });
        
        function loaddata(){
             // 使用fetch方法获取API数据
            fetch('/api/currency/quotation_new')
                .then(response => response.json())
                .then(data => {
                    if(data.type == 'ok'){
                        var data1 = data.message;
                        const select = document.getElementById('currency');
						var data2 = data1[0].quotation;
                        for (var j = 0; j < data2.length; j++) {
                            var aa = data2[j].currency_name + '/' + data2[j].legal_name;
                            // const option = document.createElement('option');
                            // option.value = aa;
                            // option.text = aa;
                            $("#currency").append("<option id='"+j+"' value='"+aa+"'>"+aa+"</option>");
                          //  alert(aa);
                        }
                        $('#currency').selectpicker('refresh');
                        $('#currency').selectpicker('render');
                    }
                })
                .catch(error => console.error(error));

        }

        function reinitIframe() {
            var iframe = document.getElementById('test')
            try {
                var bHeight = iframe.contentWindow.document.body.scrollHeight
                var dHeight = iframe.contentWindow.document.documentElement.scrollHeight
                var height = Math.max(bHeight, dHeight)
                iframe.height = height
                console.log(height)
            } catch (ex) {}
            }

        window.setInterval('reinitIframe()', 200)
    </script>
@stop