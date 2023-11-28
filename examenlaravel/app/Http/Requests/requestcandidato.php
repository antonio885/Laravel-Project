<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class requestcandidato extends FormRequest
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
            
                'candidato' =>  'required|unique:administrador|string|min:1|max:1000',
                'partido_politico' =>  'required|unique:administrador|string|min:1|max:1000'
        
        ];
    }
}
