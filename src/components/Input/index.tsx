import React, { ReactElement } from "react";

import { Container, TextInput } from './styles'

interface propsInput {
    icon?: ReactElement
    value?: string
    disable?: boolean
    placeholder: string
    secureTextEntry?: boolean
    inputRef?: any
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
    onChangeText?: (text: string) => void
    onSubmitEditing?: () => void

}

const Input: React.FC<propsInput> = ({
    icon,
    disable,
    value,
    placeholder,
    inputRef,
    secureTextEntry,
    returnKeyType,
    keyboardType,
    onChangeText,
    onSubmitEditing,
}) => {
    return (
        <Container>
            {icon && icon}
            <TextInput
                ref={inputRef}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                autoCorrect={false}
                autoCapitalize='none'
                editable={disable}
                defaultValue={value}
            />
        </Container>
    )
}

export { Input }