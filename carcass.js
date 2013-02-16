/*
@license The MIT License
@author Stefano Varesi
*/


(function() {
  var publisher,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  publisher = function(global, factory) {
    if (typeof exports === 'object') {
      return factory(exports, require('mustache'), require('xmlhttprequest').XMLHttpRequest);
    } else if (typeof define === 'function' && (define.amd != null)) {
      return define(['exports', 'mustache'], factory);
    } else {
      return factory((global.Carcass = {}), global.Mustache, global.XMLHttpRequest);
    }
  };

  publisher(this, function(Carcass, Mustache, XMLHttpRequest) {
    Carcass.MustacheNotFound = (function(_super) {

      __extends(MustacheNotFound, _super);

      function MustacheNotFound() {
        this.name = 'Carcass.MustacheNotFound';
        this.message = 'Mustache templating library not loaded';
      }

      return MustacheNotFound;

    })(Error);
    Carcass.XHRNotSupported = (function(_super) {

      __extends(XHRNotSupported, _super);

      function XHRNotSupported() {
        this.name = 'Carcass.XHRNotSupported';
        this.message = 'Your environment lacks the XHR support';
      }

      return XHRNotSupported;

    })(Error);
    Carcass.InvalidDepth = (function(_super) {

      __extends(InvalidDepth, _super);

      function InvalidDepth(depth) {
        this.name = 'Carcass.InvalidDepth';
        this.message = depth;
      }

      return InvalidDepth;

    })(RangeError);
    Carcass.InvalidScope = (function(_super) {

      __extends(InvalidScope, _super);

      function InvalidScope(scope) {
        this.name = 'Carcass.InvalidScope';
        this.message = scope;
      }

      return InvalidScope;

    })(Error);
    Carcass.InvalidLockType = (function(_super) {

      __extends(InvalidLockType, _super);

      function InvalidLockType(type) {
        this.name = 'Carcass.InvalidLockType';
        this.message = type;
      }

      return InvalidLockType;

    })(Error);
    Carcass.UnexpectedResponseStatus = (function(_super) {

      __extends(UnexpectedResponseStatus, _super);

      function UnexpectedResponseStatus(status, method) {
        this.name = 'Carcass.UnexpectedResponseStatus';
        this.message = ("" + status + " " + Carcass.HTTP_STATUS_CODES[status] + ", ") + ("method '" + method + "'");
      }

      return UnexpectedResponseStatus;

    })(Error);
    Carcass.UnsupportedMethod = (function(_super) {

      __extends(UnsupportedMethod, _super);

      function UnsupportedMethod(method) {
        this.name = 'Carcass.UnsupportedMethod';
        this.message = "Unsupported WebDAV method: " + method;
      }

      return UnsupportedMethod;

    })(Error);
    Carcass.EmptyResponse = (function(_super) {

      __extends(EmptyResponse, _super);

      function EmptyResponse(method) {
        this.name = 'Carcass.EmptyResponse';
        this.message = ("The server returned an empty response for the " + method + " ") + "request";
      }

      return EmptyResponse;

    })(Error);
    Carcass.NAME = 'Carcass.js';
    Carcass.VERSION = '0.1-alpha';
    Carcass.HTTP_STATUS_CODES = {
      100: 'Continue',
      101: 'Switching Protocols',
      102: 'Processing',
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      203: 'Non-Authoritative Information',
      204: 'No Content',
      205: 'Reset Content',
      206: 'Partial Content',
      207: 'Multi-Status',
      208: 'Already Reported',
      226: 'IM Used',
      300: 'Multiple Choices',
      301: 'Moved Permanently',
      302: 'Found',
      303: 'See Other',
      304: 'Not Modified',
      305: 'Use Proxy',
      306: 'Switch Proxy',
      307: 'Redirect',
      308: 'Permanent Redirect',
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Time-out',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precondition Failed',
      413: 'Request Entity Too Large',
      414: 'Request-URI Too Large',
      415: 'Unsupported Media Type',
      416: 'Requested range not satisfiable',
      417: 'Expectation Failed',
      418: "I'm a teapot",
      420: 'Enhance Your Calm',
      422: 'Unprocessable Entity',
      423: 'Locked',
      424: 'Failed Dependency',
      425: 'Unordered Collection',
      426: 'Upgrade Required',
      428: 'Precondition Required',
      429: 'Too many requests',
      431: 'Request Header Fields Too Large',
      444: 'No Response',
      449: 'Retry With',
      450: 'Blocked by Windows Parental Controls',
      499: 'Client Closed Request',
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Time-out',
      505: 'HTTP Version not supported',
      506: 'Variant Also Negotiates',
      507: 'Insufficient Storage',
      508: 'Loop Detected',
      509: 'Bandwidth Limit Exceeded',
      510: 'Not Extended',
      511: 'Network Authentication Required'
    };
    Carcass.WEBDAV_METHODS = ['PROPFIND', 'PROPPATCH', 'MKCOL', 'GET', 'HEAD', 'POST', 'DELETE', 'PUT', 'COPY', 'MOVE', 'LOCK', 'UNLOCK'];
    Carcass.DEFAULT_HOST = 'localhost';
    Carcass.DEFAULT_PORT = 80;
    Carcass.DEFAULT_PROTOCOL = 'http';
    Carcass.DEFAULT_CHARSET = 'UTF-8';
    Carcass.WEBDAV_NAMESPACE_URI = 'DAV:';
    Carcass.WEBDAV_NAMESPACE = 'D';
    Carcass.HEADER_TIMEOUT_MAX = 4100000000;
    Carcass.DEFAULT_TIMEOUT = 1000;
    Carcass.LockType = {
      WRITE: 'write'
    };
    Carcass.Scope = {
      EXCLUSIVE: 'exclusive',
      SHARED: 'shared'
    };
    Carcass.RequestSuccessStatus = {
      PROPFIND: 207
    };
    Carcass.RequestTemplate = {};
    Carcass.RequestTemplate.PROPFIND_BODY = "<?xml version='1.0' encoding='{{encoding}}' ?>\n<propfind xmlns='{{webdavSchema}}'>\n{{#propname}}<propname/>{{/propname}}\n{{^propname}}\n  {{#haveProperties}}\n    <prop{{#namespaces}} xmlns:{{ns}}='{{schema}}'{{/namespaces}}>\n      {{#properties}}<{{#ns}}{{ns}}:{{/ns}}{{name}}/>{{/properties}}\n    </prop>\n  {{/haveProperties}}\n  {{^haveProperties}}<allprop/>{{/haveProperties}}\n{{/propname}}\n</propfind>";
    Carcass.RequestTemplate.PROPPATCH_BODY = "<?xml version=\"1.0\" encoding=\"{{encoding}}\" ?>\n<propertyupdate\n  xmlns=\"{{webdavSchema}}\"{{#namespaces}}\n  xmlns:{{ns}}=\"{{schema}}\"{{/namespaces}}>\n<set>\n  {{#setProperties}}<prop>{{>value}}</prop>{{/setProperties}}\n</set>\n<remove>\n  {{#removeProperties}}\n    <prop>\n      <{{#ns}}{{ns}}:{{/ns}}{{name}}/>\n    </prop>\n  {{/removeProperties}}\n</remove>\n</propertyupdate>";
    Carcass.RequestTemplate.PROPPATCH_VALUE = "<{{#ns}}{{ns}}:{{/ns}}{{name}}>\n  {{value}}{{#fields}}{{>value}}{{/fields}}\n</{{name}}>";
    Carcass.RequestTemplate.LOCK_BODY = "<?xml version=\"1.0\" encoding=\"{{encoding}}\" ?>\n<lockinfo xmlns=\"{{webdavSchema}}\">\n  <lockscope><{{scope}}/></lockscope>\n  <locktype><{{type}}/></locktype>\n  <owner><href>{{owner}}</href></owner>\n</lockinfo>";
    Carcass.XPathQuery = {};
    Carcass.XPathQuery.RESOURCES = "/*[local-name() = 'multistatus' and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'response' and namespace-uri() = namespace-uri(/*)]";
    Carcass.XPathQuery.IS_COLLECTION = "boolean(./*[local-name() = 'propstat'  and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'prop' and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'resourcetype' and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'collection' and namespace-uri() = namespace-uri(/*)])";
    Carcass.XPathQuery.RESOURCE_HREF = "string(./*[local-name() = 'href' and namespace-uri() = namespace-uri(/*)])";
    Carcass.XPathQuery.RESOURCE_CTIME = "string(./*[local-name() = 'propstat'  and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'prop' and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'creationdate' and namespace-uri() = namespace-uri(/*)])";
    Carcass.XPathQuery.RESOURCE_MTIME = "string(./*[local-name() = 'propstat'  and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'prop' and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'getlastmodified'  and namespace-uri() = namespace-uri(/*)])";
    Carcass.XPathQuery.RESOURCE_ETAG = "string(./*[local-name() = 'propstat'  and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'prop' and namespace-uri() = namespace-uri(/*)]  /*[local-name() = 'getetag' and namespace-uri() = namespace-uri(/*)])";
    Carcass.XPathQuery.RESOURCE_MIME_TYPE = "string(.//*[local-name() = 'getcontenttype'  and namespace-uri() = namespace-uri(/*)])";
    Carcass.XPathQuery.RESOURCE_SIZE = "number(.//*[local-name() = 'getcontentlength'  and namespace-uri() = namespace-uri(/*)])";
    Carcass.Handler = {
      failure: function() {},
      getCallback: function(method, handler, context) {
        return function() {
          var handlerArgs, handlerResult;
          if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === Carcass.RequestSuccessStatus[method]) {
              handlerResult = Carcass.Handler[method].success.call(this);
              if (handler != null) {
                if (!handler instanceof Function) {
                  throw new TypeError("Invalid handler");
                }
                handlerArgs = [true, this.statusText].concat(handlerResult);
                return handler.apply(context != null ? context : this, handlerArgs);
              }
            } else {
              handlerResult = Carcass.Handler[method].failure.call(this);
              if (handler != null) {
                if (!handler instanceof Function) {
                  throw new TypeError("Invalid handler");
                }
                handlerArgs = [false, this.statusText].concat(handlerResult);
                return handler.apply(context != null ? context : this, handlerArgs);
              }
            }
          }
        };
      }
    };
    Carcass.Handler.PROPFIND = {
      failure: Carcass.Handler.failure,
      success: function() {
        var currentResource, href, i, indexedResources, node, nodes, nsResolver, parentHref, resource, resourceDepth, resources, root, rootDepth, tmp, unprocessedResources, _i, _len;
        if (!(this.responseXML != null)) {
          throw new Carcass.EmptyResponse('PROPFIND');
        }
        nsResolver = this.responseXML.createNSResolver(this.responseXML.documentElement);
        nodes = this.responseXML.evaluate(Carcass.XPathQuery.RESOURCES, this.responseXML, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        resources = [];
        i = 0;
        while (i < nodes.snapshotLength) {
          node = nodes.snapshotItem(i);
          if (this.responseXML.evaluate(Carcass.XPathQuery.IS_COLLECTION, node, nsResolver, XPathResult.BOOLEAN_TYPE, null).booleanValue) {
            currentResource = new Carcass.Collection();
          } else {
            currentResource = new Carcass.Resource();
          }
          currentResource.href = this.responseXML.evaluate(Carcass.XPathQuery.RESOURCE_HREF, node, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
          currentResource.ctime = new Date(this.responseXML.evaluate(Carcass.XPathQuery.RESOURCE_CTIME, node, nsResolver, XPathResult.STRING_TYPE, null).stringValue);
          currentResource.mtime = new Date(this.responseXML.evaluate(Carcass.XPathQuery.RESOURCE_MTIME, node, nsResolver, XPathResult.STRING_TYPE, null).stringValue);
          currentResource.etag = this.responseXML.evaluate(Carcass.XPathQuery.RESOURCE_ETAG, node, nsResolver, XPathResult.STRING_TYPE, null).stringValue.replace(/(^")|("$)/g, '');
          currentResource.mimeType = this.responseXML.evaluate(Carcass.XPathQuery.RESOURCE_MIME_TYPE, node, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
          if (currentResource.mimeType === '') {
            currentResource.mimeType = null;
          }
          if (!currentResource instanceof Carcass.Collection) {
            currentResource.size = this.responseXML.evaluate(Carcass.XPathQuery.RESOURCE_SIZE, node, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
          }
          resources.push(currentResource);
          i += 1;
        }
        indexedResources = [];
        unprocessedResources = [];
        root = resources[0];
        rootDepth = root.href.replace(/\/$/, '').split('/').length;
        for (_i = 0, _len = resources.length; _i < _len; _i++) {
          resource = resources[_i];
          resourceDepth = resource.href.replace(/\/$/, '').split('/').length;
          if (resourceDepth < rootDepth) {
            root = resource;
            rootDepth = root.href.replace(/\/$/, '').split('/').length;
          }
          indexedResources[resource.href] = resource;
          unprocessedResources[resource.href] = resource;
        }
        delete unprocessedResources[root.href];
        while (Object.keys(unprocessedResources).length > 0) {
          for (href in unprocessedResources) {
            if (!__hasProp.call(unprocessedResources, href)) continue;
            resource = unprocessedResources[href];
            tmp = resource.href.replace(/\/$/, '').split('/');
            tmp.pop();
            parentHref = tmp.join('/') + '/';
            resource.parent = indexedResources[parentHref];
            resource.parent.members.push(resource);
            delete unprocessedResources[href];
          }
        }
        return [root, resources];
      }
    };
    Carcass.Resource = (function() {

      function Resource() {}

      Resource.prototype.href = null;

      Resource.prototype.ctime = null;

      Resource.prototype.mtime = null;

      Resource.prototype.mimeType = null;

      Resource.prototype.parent = null;

      Resource.prototype.size = null;

      Resource.prototype.etag = null;

      Resource.prototype.toString = function() {
        return "[object Carcass.Resource]";
      };

      return Resource;

    })();
    Carcass.Collection = (function(_super) {

      __extends(Collection, _super);

      function Collection() {
        return Collection.__super__.constructor.apply(this, arguments);
      }

      Collection.prototype.members = [];

      Collection.prototype.toString = function() {
        return "[object Carcass.Collection]";
      };

      return Collection;

    })(Carcass.Resource);
    Carcass.utils = {};
    Carcass.utils.readNamespaces = function(properties) {
      var f, name, namespaces, schema, schemas, _i, _len;
      namespaces = [];
      schemas = [];
      f = function(properties, schemas) {
        var property, _i, _len, _results;
        if (!(properties instanceof Array)) {
          properties = [properties];
        }
        _results = [];
        for (_i = 0, _len = properties.length; _i < _len; _i++) {
          property = properties[_i];
          if (!property.name) {
            _results.push(delete properties[properties.indexOf(property)]);
          } else {
            if (property.schema != null) {
              if (!(schemas[property.schema] != null)) {
                schemas[property.schema] = {
                  ns: 'ns' + Object.keys(schemas).length,
                  schema: property.schema
                };
              }
              property.ns = schemas[property.schema].ns;
              if (property.fields != null) {
                _results.push(f(property.fields, schemas));
              } else {
                _results.push(void 0);
              }
            } else {
              _results.push(void 0);
            }
          }
        }
        return _results;
      };
      if (properties != null) {
        f(properties, schemas);
        for (schema = _i = 0, _len = schemas.length; _i < _len; schema = ++_i) {
          name = schemas[schema];
          namespaces.push(schema);
        }
      }
      return namespaces;
    };
    Carcass.Client = (function() {

      function Client(host, port, protocol, user, password) {
        var s, statuses, v, _ref, _ref1, _ref2, _ref3, _ref4;
        this.host = host;
        this.port = port;
        this.protocol = protocol;
        this.user = user;
        this.password = password;
        if (!(Mustache != null)) {
          throw new Carcass.MustacheNotFound();
        }
        if (!(XMLHttpRequest != null)) {
          throw new Carcass.XHRNotSupported();
        }
        statuses = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4
        };
        for (s in statuses) {
          if (!__hasProp.call(statuses, s)) continue;
          v = statuses[s];
          if (!(XMLHttpRequest[s] != null)) {
            XMLHttpRequest[s] = v;
          }
        }
        if (typeof location !== "undefined" && location !== null) {
          if ((_ref = this.host) == null) {
            this.host = location.hostname;
          }
          if ((_ref1 = this.port) == null) {
            this.port = location.port;
          }
          if ((_ref2 = this.protocol) == null) {
            this.protocol = location.protocol.replace(':', '');
          }
        }
        if ((_ref3 = this.host) == null) {
          this.host = Carcass.DEFAULT_HOST;
        }
        this.port || (this.port = Carcass.DEFAULT_PORT);
        if ((_ref4 = this.protocol) == null) {
          this.protocol = Carcass.DEFAULT_PROTOCOL;
        }
        port = Number(this.port);
        if (isNaN(this.port) || !this.port) {
          throw new TypeError("Invalid port number '" + port + "'");
        }
        this.port = port;
      }

      Client.prototype.toString = function() {
        return "[object Carcass.Client]";
      };

      Client.prototype.open = function(method, path) {
        if (__indexOf.call(Carcass.WEBDAV_METHODS, method) < 0) {
          throw new Carcass.UnsupportedMethod(method);
        }
        if (!/^\/.*/.test(path)) {
          path = "/" + path;
        }
        path = "" + this.protocol + "://" + this.host + ":" + this.port + path;
        this.xhr = new XMLHttpRequest();
        this.xhr.timeout = Carcass.DEFAULT_TIMEOUT;
        this.xhr.open(method, path, true, this.user, this.password);
        return this.xhr;
      };

      Client.prototype.setLock = function(xhr, lockToken) {
        if (lockToken) {
          xhr.setRequestHeader('If', "<" + lockToken + ">");
        }
        return this;
      };

      Client.prototype.setCharset = function(xhr, charset) {
        if (typeof document !== "undefined" && document !== null) {
          if (charset == null) {
            charset = document.characterSet;
          }
          if (charset == null) {
            charset = document.charset;
          }
        }
        if (charset == null) {
          charset = Carcass.DEFAULT_CHARSET;
        }
        xhr.setRequestHeader("Content-type", "text/xml; charset=" + charset);
        return charset;
      };

      Client.prototype.GET = function(path, handler, context) {
        this.open('GET', path).send();
        return this;
      };

      Client.prototype.PUT = function(path, content, charset, lockToken, handler, context) {
        var xhr;
        xhr = this.open('PUT', path);
        this.setCharset(xhr, charset);
        this.setLock(xhr, lockToken);
        xhr.send(content);
        return this;
      };

      Client.prototype.DELETE = function(path, lockToken, handler, context) {
        var xhr;
        xhr = this.open('DELETE', path);
        this.setLock(xhr, lockToken);
        xhr.send();
        return this;
      };

      Client.prototype.MKCOL = function(path, lockToken, handler, context) {
        var xhr;
        xhr = this.open('MKCOL', path);
        this.setLock(xhr, lockToken);
        xhr.send();
        return this;
      };

      Client.prototype.COPY = function(sourcePath, destinationPath, lockToken, overwrite, recursive, handler, context) {
        var xhr;
        xhr = this.open('COPY', sourcePath);
        xhr.setRequestHeader('Destination', destinationPath);
        xhr.setRequestHeader('Overwrite', overwrite ? 'T' : 'F');
        xhr.setRequestHeader('Depth', recursive ? 'Infinity' : '0');
        this.setLock(xhr, lockToken);
        xhr.send();
        return this;
      };

      Client.prototype.MOVE = function(sourcePath, destinationPath, lockToken, overwrite, handler, context) {
        var xhr;
        xhr = this.open('MOVE', sourcePath);
        xhr.setRequestHeader("Destination", destinationPath);
        xhr.setRequestHeader('Overwrite', overwrite ? 'T' : 'F');
        this.setLock(xhr, lockToken);
        xhr.send();
        return this;
      };

      Client.prototype.PROPFIND = function(path, depth, properties, handler, context) {
        var depthIsInfinity, xhr;
        xhr = this.open('PROPFIND', path);
        if (depth != null) {
          depthIsInfinity = (depth.toLowerCase != null) && depth.toLowerCase() === 'infinity';
          if (!(depthIsInfinity || depth === 0 || depth === 1)) {
            throw new Carcass.InvalidDepth(depth);
          }
          xhr.setRequestHeader('Depth', depth);
        }
        xhr.onreadystatechange = Carcass.Handler.getCallback('PROPFIND', handler, context);
        xhr.send(Mustache.render(Carcass.RequestTemplate.PROPFIND_BODY, {
          encoding: this.setCharset(xhr),
          webdavSchema: Carcass.WEBDAV_NAMESPACE_URI,
          haveProperties: properties instanceof Array && properties.length,
          properties: properties,
          namespaces: Carcass.utils.readNamespaces(properties)
        }));
        return this;
      };

      Client.prototype.PROPPATCH = function(path, setProperties, deleteProperties, lockToken, handler, context) {
        var xhr;
        xhr = this.open('PROPPATCH', path);
        this.setLock(xhr, lockToken);
        xhr.send(Mustache.render(Carcass.RequestTemplate.PROPPATCH_BODY, {
          encoding: this.setCharset(xhr),
          webdavSchema: Carcass.WEBDAV_NAMESPACE_URI,
          setProperties: setProperties,
          deleteProperties: deleteProperties,
          namespaces: Carcass.utils.readNamespaces(setProperties)
        }, {
          value: Carcass.RequestTemplate.PROPPATCH_VALUE
        }));
        return this;
      };

      Client.prototype.LOCK = function(path, owner, scope, lockType, depth, timeout, lockToken, handler, context) {
        var depthIsInfinity, xhr;
        if (!(Carcass.Scope[scope] != null)) {
          throw new Carcass.InvalidScope(scope);
        }
        if (!Carcass.LockType[lockType]) {
          throw new Carcass.InvalidLockType(lockType);
        }
        xhr = this.open('LOCK', path);
        if (depth != null) {
          depthIsInfinity = (depth.toLowerCase != null) && depth.toLowerCase() === 'infinity';
          if (!(depthIsInfinity || depth === 0)) {
            throw new Carcass.InvalidDepth(depth);
          }
          xhr.setRequestHeader('Depth', depth);
        }
        if (lockToken) {
          this.setLock(xhr, lockToken);
        } else {
          if (!(timeout != null)) {
            timeout = "Infinite, Second-" + Carcass.HEADER_TIMEOUT_MAX;
          } else {
            timeout = 'Second-' + timeout;
          }
          xhr.setRequestHeader('Timeout', timeout);
        }
        xhr.send(Mustache.render(Carcass.RequestTemplate.LOCK_BODY, {
          encoding: this.setCharset(xhr),
          webdavSchema: Carcass.WEBDAV_NAMESPACE_URI,
          scope: scope,
          type: lockType,
          owner: owner
        }));
        return this;
      };

      Client.prototype.UNLOCK = function(path, lockToken, handler, context) {
        var xhr;
        xhr = this.open('UNLOCK', path);
        this.setLock(xhr, lockToken);
        xhr.send();
        return this;
      };

      return Client;

    })();
    return Carcass;
  });

}).call(this);
