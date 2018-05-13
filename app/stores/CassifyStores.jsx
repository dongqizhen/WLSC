import{ EventEmitter } from 'events'
import assign from 'object-assign'
import dispatchs from '../dispatchs/Dispatch.jsx';
import searchActions from '../actions/searchActions.jsx';

let searchStores = assign({},EventEmitter.prototype,{

        stores:{
           BreadCrumbStores:[] //面包屑导航详情数组
        },

        getAllStore:function(){
            return this.stores
        },

        clearStoreBreadCrumbStores:function(){ //组建unamout时清除数据
            this.stores.BreadCrumbStores = [];
        },

        emitChange:function(){//当stores变化时触发事件
            this.emit('change')
        },

        addChangeListener:function(callback){//监听stores变化
            this.on('change', callback);
        },

        removeChangeListener: function(callback){//移除监听事件
            this.removeListener('change', callback);
        }
    }
)

dispatchs.register(
    (action) => {
        switch (action.actionType) {
            case searchActions.CASSIFY_MOUSE_CLICK:
            console.log(action.text)
                searchStores.stores.BreadCrumbStores.push(action.text)
                ;
                searchStores.emitChange();
                break;

            case indexActions.BANNER_MOUSE_LEAVE:
                indexStores.stores.BannerHideBoxIsShow=false;
                indexStores.emitChange();
                break;
                
            default:
                break;
        }
    }
)


export default searchStores;