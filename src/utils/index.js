import { string, number, } from "yup"

export const INITIAL_VALUES = {
    product_name: '',
    product_reference: '',
    product_price: '',
    product_weight: '',
    product_category: '',
    product_stock: '',
}

export const VALIDATIONS_FORM = {
    product_name: string().min(3, 'Mínimo 3 caracteres').required('El nombre es requerido'),
    product_reference: string().min(3, 'Mínimo 3 caracteres').required('La referencia es requerida'),
    product_price: number().min(2, 'Mínimo 2 caracteres').positive('No puede ser número negativo').required('El precio es requerido'),
    product_weight: number().min(2, 'Mínimo 2 caracteres').positive('No puede ser número negativo').required('El peso es requerido'),
    product_category: string().min(3, 'Mínimo 3 caracteres').required('La categoria es requerida'),
    product_stock: number().min(1, 'Mínimo 1 caracteres').positive('No puede ser número negativo').required('El stock es requerido'),
}