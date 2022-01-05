import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Alert } from 'react-native';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  async function handleSignInAnonimously() {
    const { user } = await auth().signInAnonymously()
    console.log(user)
  }

  function handleCreateUserAccount() {
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert('Usuário criado com sucesso.'))
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Este e-mail não está disponível.')
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('E-mail inválido.')
      }

      if (error.code === 'auth/weak-password') {
        Alert.alert('A senha deve ter pelo menos 6 dígitos')
      }
    })
  }

  async function handleSignWithEmailAndPassword() {
    const { user } = await auth().signInWithEmailAndPassword(email, password)
    console.log(user)
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleSignWithEmailAndPassword} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => { }} />
        <ButtonText title="Criar minha conta" onPress={handleCreateUserAccount} />
      </Account>
    </Container>
  );
}