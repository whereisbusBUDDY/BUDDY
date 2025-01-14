package com.ssafy.buddy.location.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.buddy.common.exception.CustomJsonProcessingException;
import com.ssafy.buddy.location.domain.*;
import com.ssafy.buddy.location.domain.request.LocationRequest;
import com.ssafy.buddy.location.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaConsumerService {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    private final FirstBusRepository firstBusRepository;
    private final SecondBusRepository secondBusRepository;
    private final ThirdBusRepository thirdBusRepository;
    private final FourthRepository fourthRepository;
    private final FifthBusRepository fifthBusRepository;
    private final SixthBusRepository sixthBusRepository;

    @KafkaListener(topics = "bus-1-location", groupId = "bus-location",
    containerFactory = "kafkaListenerContainerFactory")
    public void consumeBus1(ConsumerRecord<String, String> record, Acknowledgment ack) {
        log.info("Consuming message from bus-1-location: {}", record.value());
        String location = record.value();
        try {
            LocationRequest locationRequest = objectMapper.readValue(location, LocationRequest.class);
            Date date = new Date();
            FirstBus firstBus = new FirstBus(locationRequest.getLatitude(), locationRequest.getLongitude(), date);
            firstBusRepository.save(firstBus);
            ack.acknowledge();
        } catch (JsonProcessingException e) {
            handleJsonProcessingException(e);
        } catch (Exception e){
            handleKafkaException(e);
        }
    }
    @KafkaListener(topics = "bus-2-location", groupId = "bus-location",
            containerFactory = "kafkaListenerContainerFactory")
    public void consumeBus2(ConsumerRecord<String, String> record, Acknowledgment ack) {
        log.info("Consuming message from bus-2-location: {}", record.value());
        String location = record.value();
        try {
            LocationRequest locationRequest = objectMapper.readValue(location, LocationRequest.class);
            Date date = new Date();
            SecondBus secondBus = new SecondBus(locationRequest.getLatitude(), locationRequest.getLongitude(), date);
            secondBusRepository.save(secondBus);
            ack.acknowledge();
        } catch (JsonProcessingException e) {
            handleJsonProcessingException(e);
        } catch (Exception e){
            handleKafkaException(e);
        }
    }
    @KafkaListener(topics = "bus-3-location", groupId = "bus-location",
            containerFactory = "kafkaListenerContainerFactory")
    public void consumeBus3(ConsumerRecord<String, String> record, Acknowledgment ack) {
        log.info("Consuming message from bus-3-location: {}", record.value());
        String location = record.value();
        try {
            LocationRequest locationRequest = objectMapper.readValue(location, LocationRequest.class);
            Date date = new Date();
            ThirdBus thirdBus = new ThirdBus(locationRequest.getLatitude(), locationRequest.getLongitude(), date);
            thirdBusRepository.save(thirdBus);
            ack.acknowledge();
        } catch (JsonProcessingException e) {
            handleJsonProcessingException(e);
        } catch (Exception e){
            handleKafkaException(e);
        }
    }
    @KafkaListener(topics = "bus-4-location", groupId = "bus-location",
            containerFactory = "kafkaListenerContainerFactory")
    public void consumeBus4(ConsumerRecord<String, String> record, Acknowledgment ack) {
        log.info("Consuming message from bus-4-location: {}", record.value());
        String location = record.value();
        try {
            LocationRequest locationRequest = objectMapper.readValue(location, LocationRequest.class);
            Date date = new Date();
            FourthBus fourthBus = new FourthBus(locationRequest.getLatitude(), locationRequest.getLongitude(), date);
            fourthRepository.save(fourthBus);
            ack.acknowledge();
        } catch (JsonProcessingException e) {
            handleJsonProcessingException(e);
        } catch (Exception e){
            handleKafkaException(e);
        }
    }
    @KafkaListener(topics = "bus-5-location", groupId = "bus-location",
            containerFactory = "kafkaListenerContainerFactory")
    public void consumeBus5(ConsumerRecord<String, String> record, Acknowledgment ack) {
        log.info("Consuming message from bus-5-location: {}", record.value());
        String location = record.value();
        try {
            LocationRequest locationRequest = objectMapper.readValue(location, LocationRequest.class);
            Date date = new Date();
            FifthBus fifthBus = new FifthBus(locationRequest.getLatitude(), locationRequest.getLongitude(), date);
            fifthBusRepository.save(fifthBus);
            ack.acknowledge();
        } catch (JsonProcessingException e) {
            handleJsonProcessingException(e);
        } catch (Exception e){
            handleKafkaException(e);
        }
    }
    @KafkaListener(topics = "bus-6-location", groupId = "bus-location",
            containerFactory = "kafkaListenerContainerFactory")
    public void consumeBus6(ConsumerRecord<String, String> record, Acknowledgment ack) {
        log.info("Consuming message from bus-6-location: {}", record.value());
        String location = record.value();
        try {
            LocationRequest locationRequest = objectMapper.readValue(location, LocationRequest.class);
            Date date = new Date();
            SixthBus sixthBus = new SixthBus(locationRequest.getLatitude(), locationRequest.getLongitude(), date);
            sixthBusRepository.save(sixthBus);
            ack.acknowledge();
        } catch (JsonProcessingException e) {
            handleJsonProcessingException(e);
        } catch (Exception e){
            handleKafkaException(e);
        }
    }

    private void handleJsonProcessingException(JsonProcessingException e) {
        throw new CustomJsonProcessingException("JSON 변환 실패: " + e.getMessage(), e);
    }

    private void handleKafkaException(Exception e) {
        throw new RuntimeException("Kafka 전송 실패: " + e.getMessage(), e);
    }
}
