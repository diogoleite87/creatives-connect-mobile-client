import { useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { ButtonEditSubmit, Container, ContainerImg, ContentBody, ContentFooter, ContentHeader, TextButton, Image } from "./styles"
import { Input } from "../../components/Input"
import { ButtonConnect } from "../../components/ButtonConnect"
import { InputImage } from "../../components/InputImage"
import NoImage from '../../../assets/noImage.png'
import { gql, useMutation } from "@apollo/client"
import { CreatePostInput } from "../../generated/api-types"
import { useNavigation } from "@react-navigation/native"
import { imageToBase64 } from "../../utils/imageToBase64"
import { useAuth } from "../../hooks/useAuth"
import { Loading } from "../../components/Loading"

const NewConnectPage: React.FC = () => {

    const [connect, setConnect] = useState<string>('')
    const [image, setImage] = useState<string | null>(null)

    const { authData } = useAuth()

    const navigation = useNavigation()

    const submit = async () => {

        let imageBase64 = image ? await imageToBase64(image) : 'undefined'

        await submitConnect({
            variables: { username: authData?.userName!, postInput: { picture: imageBase64, text: connect } as CreatePostInput }
        })
    }

    const [submitConnect, { loading, error }] = useMutation(gql`
    mutation createPost($username: String!, $postInput: CreatePostInput!) {
        createPost(username: $username, postInput: $postInput) {
          id
          text
          picture
        }
      }
    `, {
        onCompleted(data, clientOptions) {
            navigation.goBack()
        },
    })

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
            </ContentHeader>
            <ContentBody>
                <Input
                    placeholder='Connect'
                    onChangeText={(text: string) => setConnect(text)}
                />
                <ContainerImg>
                    {image ? <Image source={{ uri: image }} /> : <Image source={NoImage} />}
                    <InputImage setImage={setImage} />
                </ContainerImg>
                <ButtonEditSubmit onPress={submit} disabled={loading}>
                    {loading ? <Loading /> : <TextButton> Connect </TextButton>}
                </ButtonEditSubmit>
            </ContentBody>
            <ContentFooter>
                <ButtonConnect />
            </ContentFooter>
        </Container>
    )
}

export { NewConnectPage }