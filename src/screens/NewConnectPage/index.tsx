import { useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { ButtonEditSubmit, Container, ContainerImg, ContentBody, ContentFooter, ContentHeader, TextButton, Image } from "./styles"
import { Input } from "../../components/Input"
import { ButtonConnect } from "../../components/ButtonConnect"
import { InputImage } from "../../components/InputImage"
import NoImage from '../../../assets/noImage.png'

const NewConnectPage: React.FC = () => {

    const [connect, setConnect] = useState<string>('')
    const [image, setImage] = useState<string | null>(null)

    const submitConnect = async () => {

    }

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
                <ButtonEditSubmit onPress={submitConnect}>
                    <TextButton>
                        Connect
                    </TextButton>
                </ButtonEditSubmit>
            </ContentBody>
            <ContentFooter>
                <ButtonConnect />
            </ContentFooter>
        </Container>
    )
}

export { NewConnectPage }