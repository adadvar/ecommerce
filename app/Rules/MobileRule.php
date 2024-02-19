<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class MobileRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $mobileRegex = '/^(0098|\+?98|0)9\d{9}$/';
        if (!preg_match($mobileRegex, $value)) {
            $fail("The $attribute is not a valid mobile number.");
        }
    }
}
