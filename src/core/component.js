export default class Component {
    $target;
    props;
    state;
    constructor ($target, props) {
        this.$target = $target;
        this.props = props;
        this.setup();
        this.render();
        this.setEvent();

    }
    setup () {};
    mounted() {};
    template () { return ''; }
    render () {
        this.$target.innerHTML = this.template();
        this.mounted()
    }
    setEvent () {}
    setState (newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
    addEvent (eventType, selector, callback) {
        this.$target.addEventListener(eventType, event => {
            if (!event.target.closest(selector)) return false;
            callback(event);
        })
    }
    loadCSS (id, href) {
        if (!document.querySelector(`#${id}`)) {
            const link = document.createElement('link');
            link.id = id;
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        }
    }
}
