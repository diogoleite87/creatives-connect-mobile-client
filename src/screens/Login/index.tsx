import { useNavigation } from "@react-navigation/native"
import React, { useRef, useState } from "react"

import { Input } from "../../components/Input"

import {
  ButtonSubmit,
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  RegisterView,
  Subtitle,
  TextButtonSubmit,
  TextError,
  TextRegister,
  TextRegisterButton,
  Title
} from "./styles"

import { useAuth } from "../../hooks/useAuth"
import { useMutation } from "@apollo/client"
import { LoginMutation, LoginMutationVariables, User } from "../../generated/api-types"
import { LOGIN } from "../../graphql/auth/mutations"

const Login: React.FC = () => {
  const navigation = useNavigation()

  const passwordRef = useRef<any>()

  const { signIn } = useAuth()

  const [userName, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorLogin, setErrorLogin] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)

  const [getToken, { data: tokenData, error: tokenError, loading: tokenLoading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN, {
    onCompleted(data, clientOptions) {
      setToken(data.login.token ? data.login.token : null)
    }, onError(error, clientOptions) {
      setErrorLogin(true)
    },
  })

  const submit = async () => {
    await getToken({ variables: { username: userName, password } })

    token ? signIn({ userName, token }) : setErrorLogin(true)
  }


  return (
    <Container>
      <ContentHeader>
        <Title>Creatives Connect</Title>
        <Subtitle>Que bom ter você de volta aqui!</Subtitle>
      </ContentHeader>

      <ContentBody>
        {errorLogin ? (
          <TextError>
            Error ao efetuar o login, verifique os campus e tente novamente
          </TextError>
        ) : null}

        <Input
          placeholder="Nome de Usuário"
          keyboardType="default"
          onChangeText={(text: string) => setUsername(text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          inputRef={passwordRef}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text: string) => setPassword(text)}
          returnKeyType="done"
          onSubmitEditing={submit}
        />
      </ContentBody>

      <ContentFooter>
        <RegisterView>
          <TextRegister>Ainda não tem uma conta?</TextRegister>
          <TextRegisterButton
            onPress={() => navigation.navigate("Register" as never)}
          >
            Cadastrar
          </TextRegisterButton>
        </RegisterView>

        <ButtonSubmit onPress={submit}>
          <TextButtonSubmit>Entrar</TextButtonSubmit>
        </ButtonSubmit>
      </ContentFooter>
    </Container>
  )
}

export { Login }
