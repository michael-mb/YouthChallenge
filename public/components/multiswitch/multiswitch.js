/**
 * @module       MultiSwitches
 * @version      2.2.1
 * @author       OXAYAZA {@link https://oxayaza.page.link/github}
 * @license      CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @see          {@link https://codepen.io/OXAYAZA/pen/eRbYjV}
 * @see          {@link https://oxayaza.page.link/github_mswitches}
 * @see          {@link https://oxayaza.page.link/linkedin}
 * @description  Allows you to use multiple switches to switch class on the target,
 *               itself and other switches linked to the same target.
 */
function MultiSwitch(options) {
    function Switch(options) {
        if (!(options.node instanceof Element)) {
            throw new Error("Switch element is required");
        }
        console.log(options)
        if (!(options.targets instanceof NodeList || options.targets instanceof Array) && typeof options.targets !== "string") {
            throw new Error("Targets must be NodeList, Array or string");
        }
        for (var key in Switch.defaults) {
            this[key] = Switch.defaults[key];
        }
        for (var _key in options) {
            this[_key] = options[_key];
        }
        ["targets", "scope", "isolate"].forEach(
            function (key) {
                this[key] = Switch.procSelector(this[key]);
            }.bind(this)
        );
        this.node.multiSwitch = this;
        this.targets.forEach(
            function (target) {
                if (!target.multiSwitchTarget) new Target(target);
                target.multiSwitchTarget.updateGroup({ node: this.node, state: this.state, class: this.class });
            }.bind(this)
        );
        this.assignHandlers();
        this.changeState(this.state);
        return this;
    }
    Switch.defaults = { node: null, state: false, class: "active", event: "click", targets: null, scope: null, isolate: null, handlers: { switch: null, emitter: null, scope: null, isolate: null } };
    Switch.prototype.assignHandlers = function () {
        this.handlers.switch = this.changeState.bind(this);
        this.node.addEventListener(this.event, this.handlers.switch);
        this.handlers.emitter = function (event) {
            if (event.emitter.multiSwitchTarget.groups[this.class].state !== this.state) {
                this.changeState(event.emitter.multiSwitchTarget.groups[this.class].state);
            }
        }.bind(this);
        this.node.addEventListener("switch:" + this.class, this.handlers.emitter);
        if (this.scope && this.scope.length) {
            this.handlers.scope = function (event) {
                if (!this.checkScope(event.target) && this.state) this.changeState();
            }.bind(this);
            document.addEventListener(this.event, this.handlers.scope);
        }
        if (this.isolate && this.isolate.length) {
            this.handlers.isolate = function (event) {
                if (this.checkIsolate(event.target) && this.state) this.changeState();
            }.bind(this);
            document.addEventListener(this.event, this.handlers.isolate);
        }
    };
    Switch.prototype.removeHandlers = function () {
        if (this.handlers.switch) {
            this.node.removeEventListener(this.event, this.handlers.switch);
            this.handlers.switch = null;
        }
        if (this.handlers.emitter) {
            this.node.removeEventListener("switch:" + this.class, this.handlers.emitter);
            this.handlers.emitter = null;
        }
        if (this.handlers.scope) {
            document.removeEventListener(this.event, this.handlers.scope);
            this.handlers.scope = null;
        }
        if (this.handlers.isolate) {
            document.removeEventListener(this.event, this.handlers.isolate);
            this.handlers.isolate = null;
        }
    };
    Switch.procSelector = function (selector) {
        if (typeof selector === "string") return document.querySelectorAll(selector);
        return selector;
    };
    Switch.prototype.changeState = function (state) {
        if (typeof state !== "boolean") this.state = !this.state;
        else this.state = state;
        if (this.state) this.node.classList.add(this.class);
        else this.node.classList.remove(this.class);
        this.targets.forEach(
            function (target) {
                var event = new CustomEvent("switch:" + this.class);
                event.emitter = this.node;
                target.dispatchEvent(event);
            }.bind(this)
        );
    };
    Switch.prototype.checkScope = function (node) {
        if (this.node.contains(node)) return true;
        for (var i = 0; i < this.scope.length; i++) {
            if (this.scope[i].contains(node)) return true;
        }
        return false;
    };
    Switch.prototype.checkIsolate = function (node) {
        if (this.node.contains(node)) return false;
        for (var i = 0; i < this.isolate.length; i++) {
            if (this.isolate[i].contains(node)) return true;
        }
        return false;
    };
    function Target(node) {
        this.node = node;
        this.groups = {};
        this.node.multiSwitchTarget = this;
        return this;
    }
    Target.prototype.updateGroup = function (params) {
        if (!this.groups[params.class]) {
            this.groups[params.class] = {
                state: params.state,
                class: params.class,
                switches: [],
                event: function (event) {
                    if (event.emitter.multiSwitch.state !== this.state) {
                        this.changeState(event.emitter.multiSwitch.state, event.emitter.multiSwitch.class);
                    }
                }.bind(this),
            };
            this.node.addEventListener("switch:" + params.class, this.groups[params.class].event);
        }
        this.groups[params.class].switches.push(params.node);
    };
    Target.prototype.changeState = function (state, className) {
        var group = this.groups[className];
        if (typeof state !== "boolean") group.state = !group.state;
        else group.state = state;
        if (group.state) this.node.classList.add(group.class);
        else this.node.classList.remove(group.class);
        group.switches.forEach(
            function (node) {
                var event = new CustomEvent("switch:" + group.class);
                event.emitter = this.node;
                node.dispatchEvent(event);
            }.bind(this)
        );
    };
    return new Switch(options);
}
