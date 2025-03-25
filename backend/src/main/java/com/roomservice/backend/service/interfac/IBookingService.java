package com.roomservice.backend.service.interfac;

import com.roomservice.backend.dto.Response;
import com.roomservice.backend.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}