<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class requestvotante extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nombre' =>  'required|string|min:1|max:1000',
            'cedula' => 'required|integer|min:100',
            'apoyo_partido' =>  'required|string|min:1|max:1000',
            'mesaVotacion' =>  'required|string|min:1|max:1000'
        ];
    }
}
