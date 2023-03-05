import { useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { ButtonEditSubmit, Container, ContentBody, ContentFooter, ContentHeader, TextButton } from "./styles"
import { Input } from "../../components/Input"
import { ButtonConnect } from "../../components/ButtonConnect"

const CommentPage: React.FC = () => {

    const [comment, setComment] = useState<string>('')

    const submitComment = async () => {

    }

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
            </ContentHeader>
            <ContentBody>
                <Input
                    placeholder='Comentário'
                    onChangeText={(text: string) => setComment(text)}

                />
                <ButtonEditSubmit onPress={submitComment}>
                    <TextButton>
                        Comentar
                    </TextButton>
                </ButtonEditSubmit>
            </ContentBody>
            <ContentFooter>
                <ButtonConnect />
            </ContentFooter>
        </Container>
    )
}

export { CommentPage }