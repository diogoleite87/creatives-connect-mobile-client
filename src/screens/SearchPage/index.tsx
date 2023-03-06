import { useEffect, useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { Container, ContentBody, ContentFooter, ContentHeader } from "./styles"
import { Input } from "../../components/Input"
import { ButtonConnect } from "../../components/ButtonConnect"

const SearchPage: React.FC = () => {

    const [userSearch, setUserSearch] = useState<string>('')

    useEffect(() => {
        console.log(userSearch)
    }, [userSearch])

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
                <Input
                    placeholder='Nome de Usuário'
                    onChangeText={(text: string) => setUserSearch(text)}
                />
            </ContentHeader>
            <ContentBody>
            </ContentBody>
            <ContentFooter>
                <ButtonConnect />
            </ContentFooter>
        </Container>
    )
}

export { SearchPage }