package com.roomservice.backend.service.interfac;

import com.roomservice.backend.dto.LoginRequest;
import com.roomservice.backend.dto.Response;
import com.roomservice.backend.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}