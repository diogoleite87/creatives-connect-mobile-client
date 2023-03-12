import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ButtonPicker, Container, ContainerInput, TextInput } from './styles';
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { RFValue } from 'react-native-responsive-fontsize';

interface propsInputDate {
    setDate(date: Date): void
    date: Date
}

const InputDate: React.FC<propsInputDate> = ({ setDate, date }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const handleDateConfirm = (date: Date) => {
        setDate(date);
        setDatePickerVisibility(false);
    };

    const handleDateCancel = () => {
        setDatePickerVisibility(false);
    };

    return (
        <Container>
            <ContainerInput>
                <TextInput
                    placeholder='Data de Aniversario'
                    editable={false}
                    defaultValue={date.toLocaleDateString()}
                />
            </ContainerInput>
            <ButtonPicker onPress={showDatePicker}>
                <FontAwesomeIcon icon={faCalendarDays} size={RFValue(18)} />
            </ButtonPicker>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={date}
                onConfirm={handleDateConfirm}
                onCancel={handleDateCancel}
            />
        </Container>
    );
};

export { InputDate };