package com.ssafy.buddy.location.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LocationRequest {
    private Double latitude;
    private Double longitude;
}
