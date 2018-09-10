// This file is auto gererated by build/build-entry.js
import Actionsheet from './actionsheet';
import Badge from './badge';
import BadgeGroup from './badge-group';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import CellSwipe from './cell-swipe';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Circle from './circle';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Field from './field';
import Icon from './icon';
import ImagePreview from './image-preview';
import Lazyload from './lazyload';
import List from './list';
import Loading from './loading';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import NumberKeyboard from './number-keyboard';
import Pagination from './pagination';
import Panel from './panel';
import PasswordInput from './password-input';
import Picker from './picker';
import Popup from './popup';
import Progress from './progress';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Rate from './rate';
import Row from './row';
import Search from './search';
import Slider from './slider';
import Step from './step';
import Stepper from './stepper';
import Steps from './steps';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';
import Tab from './tab';
import Tabbar from './tabbar';
import TabbarItem from './tabbar-item';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import TreeSelect from './tree-select';
import Uploader from './uploader';
import Waterfall from './waterfall';

var version = '1.0.0';
var components = [Actionsheet, Badge, BadgeGroup, Button, Cell, CellGroup, CellSwipe, Checkbox, CheckboxGroup, Circle, Col, Collapse, CollapseItem, DatetimePicker, Dialog, Field, Icon, ImagePreview, List, Loading, NavBar, NoticeBar, NumberKeyboard, Pagination, Panel, PasswordInput, Picker, Popup, Progress, PullRefresh, Radio, RadioGroup, Rate, Row, Search, Slider, Step, Stepper, Steps, Swipe, SwipeItem, Switch, SwitchCell, Tab, Tabbar, TabbarItem, Tabs, Tag, Toast, TreeSelect, Uploader];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, version, Actionsheet, Badge, BadgeGroup, Button, Cell, CellGroup, CellSwipe, Checkbox, CheckboxGroup, Circle, Col, Collapse, CollapseItem, DatetimePicker, Dialog, Field, Icon, ImagePreview, Lazyload, List, Loading, NavBar, NoticeBar, NumberKeyboard, Pagination, Panel, PasswordInput, Picker, Popup, Progress, PullRefresh, Radio, RadioGroup, Rate, Row, Search, Slider, Step, Stepper, Steps, Swipe, SwipeItem, Switch, SwitchCell, Tab, Tabbar, TabbarItem, Tabs, Tag, Toast, TreeSelect, Uploader, Waterfall };

export default {
  install: install,
  version: version
};