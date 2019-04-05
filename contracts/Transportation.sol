pragma solidity ^0.5.0;

contract Transportation {

     event TransportCreated(
        uint upc,
        string movement,
        string origin,
        string destination
    );

    uint public transportCount = 0;

    struct Transport {
        uint upc;
        string movement;
        string origin;
        string destination;
    }
    
    mapping(uint => Transport) public transports;

    constructor() public {
        createTransport("Automobile", "Washington DC", "Los Angeles, CA");
      }

    function createTransport(string memory _movement, string memory _origin, string memory _destination) public {
        transportCount ++;
        transports[transportCount] = Transport(transportCount, _movement, _origin, _destination);
        //emit an event, basically a log
        emit TransportCreated(transportCount, _movement, _origin, _destination);
    }
}