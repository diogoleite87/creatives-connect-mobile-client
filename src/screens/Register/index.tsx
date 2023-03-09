import React, { useRef, useState } from "react";

import { Input } from "../../components/Input";

import {
    Container,
    Header,
    Title, Subtitle,
    Content,
    View,
    Button,
    TextButton,
    RegisterView,
    TextRegister,
    TextRegisterButton,
    TextError,
    TextSuccess,
    SubtitleRegister,
    ProfileImg
} from './styles'
import { useNavigation } from "@react-navigation/native";
import { ButtonBack } from "../../components/ButtonBack";
import { InputImage } from "../../components/InputImage";

import ImagemProfileNull from '../../../assets/imageProfileNull.png'
import { gql, useMutation } from "@apollo/client";
import { CreateUserInput, MutationCreateUserArgs } from "../../generated/api-types";
import { CREATE_USER } from "../../graphql/user/mutations";
import { UserName } from "../SearchPage/styles";


const Register: React.FC = () => {

    const navigation = useNavigation();

    const passwordRef = useRef<any>()
    const userRef = useRef<any>()
    const cityRef = useRef<any>()

    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [city, setCity] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const [createUser, { data: createUserData, error: createUserError, loading: createUserLoading }] = useMutation(gql`
    mutation createUser($userInput: CreateUserInput!) {
        createUser(userInput: $userInput) {
          username
        }
      },
    `, {
        onCompleted(data, clientOptions) {
            navigation.navigate('Login' as never)
        },
        variables: { userInput: { username: userName, password: password, name: name, city: city, birthday: 1019222478 } },
        onError(error, clientOptions) {
            console.log(error)
        },
    });

    return (
        <Container showsVerticalScrollIndicator={false}>
            <Header>
                <ButtonBack />
                <Title>Creatives Connect</Title>
                <Subtitle>Um lugar onde mentes criativas podem se comunicar.</Subtitle>
                <SubtitleRegister>Faça seu cadastro!</SubtitleRegister>
            </Header>

            <Content>
                {error ?
                    <TextError>
                        {errorMessage}
                    </TextError>
                    : success ?
                        <TextSuccess>
                            Cadastro efetuado com sucesso, volte a tela de login para entrar!"
                        </TextSuccess>
                        : null}

                {image ? <ProfileImg source={{ uri: image }} /> : <ProfileImg source={ImagemProfileNull} />}
                <InputImage setImage={setImage} />
                <Input
                    placeholder='Nome'
                    keyboardType='default'
                    onChangeText={(text: string) => setName(text)}
                    returnKeyType="next"
                    onSubmitEditing={() => userRef.current.focus()}
                />
                <Input
                    inputRef={userRef}
                    placeholder='Nome de Usuario'
                    keyboardType='default'
                    onChangeText={(text: string) => setUserName(text)}
                    returnKeyType="next"
                    onSubmitEditing={() => cityRef.current.focus()}
                />
                <Input
                    inputRef={cityRef}
                    placeholder='Cidade'
                    keyboardType='default'
                    onChangeText={(text: string) => setCity(text)}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Input
                    inputRef={passwordRef}
                    placeholder='Senha'
                    secureTextEntry
                    onChangeText={(text: string) => setPassword(text)}
                    returnKeyType="next"
                />

            </Content>

            <View>
                <RegisterView>
                    <TextRegister>Já possui uma conta?</TextRegister>
                    <TextRegisterButton onPress={() => navigation.navigate('Login' as never)}>Entrar</TextRegisterButton>
                </RegisterView>


                <Button onPress={() => createUser}>
                    <TextButton>Cadastrar</TextButton>
                </Button>
            </View>
        </Container>
    )
}

export { Register }