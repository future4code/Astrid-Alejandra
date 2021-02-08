import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, Button, Center, FormControl } from "@chakra-ui/react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  //Input handlers
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  //UseEffect
  useEffect(() => {
    const token = localStorage.getItem("token");
    //acho que vou tirar esse if, será que funciona? só dar uma mensagem de login exitoso, e as vezes criar um botao de logout que elimine o token do local storage!
    if (token) {
      history.push("/trips");
    }
  }, [history]);

  //Requisição
  const login = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/astrid-epps/login",
        body
      )
      .then((response) => {
        //não lembro por que tem esse response.data.token aqui embaixo
        localStorage.setItem("token", response.data.token);
        history.push("/trips");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Center m="10px">
      <FormControl as="form" w="40%" isRequired errorBorderColor="red">
        <Input
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
          type="email"
        />
        <Input
          id="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          type="password"
        />
        <Button onClick={login}>Log In</Button>
      </FormControl>
    </Center>
  );
}

export default LoginPage;
