package com.student.ServiceImpl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.student.Dto.request.Authenticationrequest;
import com.student.Dto.request.Userregisterrequest;
import com.student.Dto.response.Authenticationresponse;
import com.student.Model.User;
import com.student.Model.enumerate.Role;
import com.student.Repo.Userrepo;
import com.student.Service.Authservice;
import com.student.Util.Jwtutil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class Authserviceimpl implements Authservice{


    private final Userrepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final Jwtutil jwtUtil;

    @Override
    public boolean userRegistration(Userregisterrequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Authenticationresponse userAuthentication(Authenticationrequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        if(user!=null){
        var token = jwtUtil.generateToken(user);
        return Authenticationresponse.builder()
                .token(token)
                
                .build();
        }
        else{
            return  null;
        }
    }


}
