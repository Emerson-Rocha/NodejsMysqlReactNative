import React, { useState } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View>
            <Card>
                 <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>
            <View style = {{ margin: 20 }}>
                <TextInput
                    label="Login"
                    mode="outlined"
                    placeholder=""
                    style={{ marginTop: 20 }}
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    placeholder=""
                    style={{ marginTop: 20 }}                 
                    secureTextEntry={true}
                    right={
                       <TextInput.Icon 
                        icon={showPassword ? 'eye-off' : 'eye'}                       
                       />
                    
                    }
                    onPress={() => setShowPassword(!showPassword)}
                
                />
                <Button mode="contained" icon="send-circle-outline" 
                      style={{ marginTop: 20, width: '30%' }}>
                        Entrar</Button>
            </View>
        </View>



    );
}

export default Login;