<?php

namespace App\Providers;

use Arr;
use Validator;
use Illuminate\Support\ServiceProvider;

class ValidatorServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Validator::extend('in_keys', function ($attribute, $value, $parameters, $validator) {
            return collect($parameters)->contains(function ($parameter) use ($value, $validator) {
                return array_key_exists($value, Arr::get($validator->getData(), $parameter));
            });
        });

        Validator::extendImplicit('required_with_any', function ($attribute, $value, $parameters, $validator) {
            $data = $validator->getData();

            $parts = explode('.*.', $parameters[0]);
            $data = (array) Arr::get($data, $parts[0]);
            for ($i = 1; $i < count($parts); $i++) {
                $data = array_column($data, $parts[$i]);
            }

            return ! empty($validator->getData()[$attribute]) || empty(array_filter($data));
        });
    }

    public function register()
    {
        //
    }
}
