package com.testeFoody.rastrear_pedido.service;


import com.testeFoody.rastrear_pedido.model.User;
import com.testeFoody.rastrear_pedido.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Como usamos o e-mail como identificador de login, buscamos por ele
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Utilizador não encontrado com o e-mail: " + email));

        // Retorna o objeto User do Spring Security com e-mail, senha criptografada e autoridades/permissões vazias por enquanto
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getSenha(),
                new ArrayList<>()
        );
    }
}