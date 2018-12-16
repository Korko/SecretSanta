<?php

namespace App\Http\Requests;

use App;

class RandomFormRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [];
        if (!App::environment('local', 'dev')) {
            $rules['g-recaptcha-response'] = 'required|captcha';
        }

        $rules += [
            'participants'                => 'required|array|min:3',

            'participants.0.email'        => 'required_with:participant.*.email',
            'participants.*.name'         => 'required|distinct',
            'participants.*.email'        => 'required_without:participants.*.phone|required_if:dearsanta,1|email',
            'participants.*.phone'        => 'required_without:participants.*.email|numeric|regex:#0?[67]\d{8}#',
            'participants.*.exclusions'   => 'sometimes|array',
            'participants.*.exclusions.*' => 'integer|in_keys:participants',

            'title'                       => 'required_with_any:participants.*.email|string',
            'contentMail'                 => 'required_with_any:participants.*.email|string|contains:{TARGET}',
            'contentSMS'                  => 'required_with_any:participants.*.phone|string|contains:{TARGET}|smsCount:'.config('sms.max'),
            'dearsanta'                   => 'boolean|in:"0","1"',
            'dearsanta-expiration'        => 'required_if:dearsanta,"1"|date|after:tomorrow|before:+1year',
        ];

        return $rules;
    }
}
