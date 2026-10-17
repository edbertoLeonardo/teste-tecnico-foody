package com.testeFoody.rastrear_pedido.service;

import com.testeFoody.rastrear_pedido.dto.UserDTO;
import com.testeFoody.rastrear_pedido.model.User;
import com.testeFoody.rastrear_pedido.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registar(UserDTO dto) {
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Este e-mail já está registado!");
        }

        User user = new User();
        user.setNome(dto.getNome());
        user.setEmail(dto.getEmail());
        user.setSenha(dto.getSenha());

        return userRepository.save(user);
    }

}
