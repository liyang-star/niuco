<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Setting;
use App\Service\RedisService;


class SettingController extends Controller
{
    public function index()
    {
        $settingList = Setting::all()->toArray();
        $setting = [];
        foreach ($settingList as $key => $value) {
            $setting[$value['key']] = $value['value'];
        }
        // var_dump($setting);
        return view('admin.setting.base', ['setting' => $setting]);
    }

    public function index_second(){
        $settingList = Setting::all()->toArray();
        $setting = [];
        foreach ($settingList as $key => $value) {
            $setting[$value['key']] = $value['value'];
        }
        // var_dump($setting);
        return view('admin.setting.index_second', ['setting' => $setting]);
    }

    public function index_setkline(){
        $redis = RedisService::getInstance(6);
        // var_dump($setting);
        $value = $redis->get("BTC.USDT.set_price");
        if(!$value){
            $value = 0;
        }
        return view('admin.setting.setkline', ['setkline' => $value]);
    }
    
    public function setkline(Request $request){
        $redis = RedisService::getInstance(6);
        $currency = $request->input("currency");
        $num = $request->input("setkline");
        $redis->set($currency.'.set_price', $num);
        $redis->expire($currency.'.set_price', 360);
        // var_dump($setting);
       // return view('admin.setting.setkline', ['setkline' => $redis->get("setkline")]);
        return $this->success('操作成功');
    }
    public function dataSetting()
    {
        $settingList = Setting::all()->toArray();
        $setting = [];
        foreach ($settingList as $key => $value) {
            $setting[$value['key']] = $value['value'];
        }
        return view('admin.setting.data', ['setting' => $setting]);
    }

    public function postAdd(Request $request)
    {
        $data = $request->all();
        $generation = $request->input('generation');
        $reward_ratio = $request->input('reward_ratio');
        $need_has_trades = $request->input('need_has_trades');
        unset($data['generation'], $data['reward_ratio'], $data['need_has_trades']);
        $lever_fee_options = compact('generation', 'reward_ratio', 'need_has_trades');
        $lever_fee_options = make_multi_array(['generation', 'reward_ratio', 'need_has_trades'], count($generation), $lever_fee_options);

        $generation = array_column($lever_fee_options, 'generation');
        $reward_ratio = array_column($lever_fee_options, 'reward_ratio');
        array_multisort($generation, SORT_ASC, SORT_NUMERIC, $lever_fee_options);

        $data['lever_fee_options'] = serialize($lever_fee_options);
        try {
            foreach ($data as $key => $value) {
                $setting = Setting::where('key', $key)->first();

                if (!$setting) {
                    $setting = new Setting();
                    $setting->key = $key;
                }

                $setting->value = $value;
                $setting->save();
            }
            return $this->success('操作成功');
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage());
        }
    }


    public function dogeneralaccount(Request $request)
    {
        $data = $request->all();
        foreach ($data as $key => $value) {
            switch ($key) {
                case 'contract_address':
                    break;
                case 'total_account_address':
                    break;
                case 'total_account_key':
                    break;
            }
            Setting::updateValueByKey($key, $value);
        }
        return $this->success('操作成功');
    }
}
