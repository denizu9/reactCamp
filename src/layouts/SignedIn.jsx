import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn(props){
    return(
        <div>

            <Menu.Item>
                <Image avatar spaced = "right" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwpP8APba9D5lSwfCi0PGqGpA1qLs44Gq8c31_6gISyYlnpbUZY4VlyEsQj7YFHmSjjQ">

                </Image>
                <Dropdown pointing="top right" text="Deniz">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim"></Dropdown.Item>
                        <Dropdown.Item onClick={props.signOut} text = "Çıkış Yap"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}