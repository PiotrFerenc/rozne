app.factory("service", ["$http", function ($http) {
        var request = {};

        request.get = function (type, data) {
            return $http({
                method: "GET",
                url: config.api + type,
                headers: {
                    'Content-Type': "application/json",
                },
                params: data
            });
        };

        request.post = function (type, data) {
            return $http({
                method: "POST",
                url: config.api + type,
                headers: {
                    'Content-Type': "application/json",
                },
                data: data
            });
        };

        request.put = function (type,id, data) {
            return $http({
                method: "PUT",
                url: config.api + type+"/"+id,
                headers: {
                    'Content-Type': "application/json"
                },
                data: data
            });
        };

        request.delete = function (type, id) {
            return $http({
                method: "DELETE",
                url: config.api + type + "/" + id,
                headers: {
                    'Content-Type': "application/json"
                }
            });
        };


        return request;
    }])
    .service("api", ["service","$http", function (service, $http) {
        this.serviceName = null;

        this.set = function (name) {
            this.serviceName = name;
        }
        this.get = function (data) {
            return service.get(this.serviceName,data);
        }
        this.add = function (data) {
            return service.post(this.serviceName, data);
        }

        this.update = function (id, data) {
            return service.put(this.serviceName, id, data);
        }
        this.delete = function (id) {
            return service.delete(this.serviceName, id);
        }
    }]);