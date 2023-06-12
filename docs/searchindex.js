Search.setIndex({docnames:["APIReference","UCTB","UCTB.dataset","UCTB.evaluation","UCTB.model","UCTB.model_unit","UCTB.preprocess","UCTB.train","UCTB.utils","index","md_file/all_results","md_file/index","md_file/installation","md_file/introduction","md_file/quickstart","md_file/src/image/README","md_file/static/current_supported_models","md_file/static/experiment_on_bike","md_file/static/experiment_on_chargestation","md_file/static/experiment_on_metro","md_file/static/parameter_search","md_file/static/preprocess_api","md_file/static/quick_start","md_file/static/stable_test","md_file/static/stmeta","md_file/static/transfer_record","md_file/tutorial","md_file/uctb_group","modules","update_guide"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,sphinx:56},filenames:["APIReference.rst","UCTB.rst","UCTB.dataset.rst","UCTB.evaluation.rst","UCTB.model.rst","UCTB.model_unit.rst","UCTB.preprocess.rst","UCTB.train.rst","UCTB.utils.rst","index.rst","md_file\\all_results.md","md_file\\index.md","md_file\\installation.md","md_file\\introduction.md","md_file\\quickstart.md","md_file\\src\\image\\README.md","md_file\\static\\current_supported_models.md","md_file\\static\\experiment_on_bike.md","md_file\\static\\experiment_on_chargestation.md","md_file\\static\\experiment_on_metro.md","md_file\\static\\parameter_search.md","md_file\\static\\preprocess_api.md","md_file\\static\\quick_start.md","md_file\\static\\stable_test.md","md_file\\static\\stmeta.md","md_file\\static\\transfer_record.md","md_file\\tutorial.md","md_file\\uctb_group.md","modules.rst","update_guide.txt"],objects:{"":{UCTB:[1,0,0,"-"]},"UCTB.dataset":{data_loader:[2,0,0,"-"],dataset:[2,0,0,"-"]},"UCTB.dataset.data_loader":{NodeTrafficLoader:[2,1,1,""]},"UCTB.dataset.data_loader.NodeTrafficLoader":{daily_slots:[2,2,1,""],dataset:[2,2,1,""],external_dim:[2,2,1,""],make_concat:[2,3,1,""],station_number:[2,2,1,""],train_closeness:[2,2,1,""],train_y:[2,2,1,""]},"UCTB.dataset.dataset":{DataSet:[2,1,1,""]},"UCTB.dataset.dataset.DataSet":{MergeIndex:[2,2,1,""],MergeWay:[2,2,1,""],data:[2,2,1,""],merge_data:[2,3,1,""],node_monthly_interaction:[2,2,1,""],node_station_info:[2,2,1,""],node_traffic:[2,2,1,""],time_fitness:[2,2,1,""],time_range:[2,2,1,""]},"UCTB.evaluation":{metric:[3,0,0,"-"]},"UCTB.evaluation.metric":{mape:[3,4,1,""],rmse:[3,4,1,""]},"UCTB.model":{ARIMA:[4,0,0,"-"],DCRNN:[4,0,0,"-"],DeepST:[4,0,0,"-"],GeoMAN:[4,0,0,"-"],HM:[4,0,0,"-"],STMeta:[4,0,0,"-"],ST_MGCN:[4,0,0,"-"],ST_ResNet:[4,0,0,"-"],XGBoost:[4,0,0,"-"]},"UCTB.model.ARIMA":{ARIMA:[4,1,1,""]},"UCTB.model.ARIMA.ARIMA":{adf_test:[4,3,1,""],get_order:[4,3,1,""],predict:[4,3,1,""]},"UCTB.model.DCRNN":{DCRNN:[4,1,1,""]},"UCTB.model.DCRNN.DCRNN":{build:[4,3,1,""]},"UCTB.model.DeepST":{DeepST:[4,1,1,""]},"UCTB.model.DeepST.DeepST":{build:[4,3,1,""]},"UCTB.model.GeoMAN":{GeoMAN:[4,1,1,""],input_transform:[4,4,1,""],split_timesteps:[4,4,1,""]},"UCTB.model.GeoMAN.GeoMAN":{build:[4,3,1,""]},"UCTB.model.HM":{HM:[4,1,1,""]},"UCTB.model.HM.HM":{predict:[4,3,1,""]},"UCTB.model.STMeta":{STMeta:[4,1,1,""]},"UCTB.model.STMeta.STMeta":{build:[4,3,1,""]},"UCTB.model.ST_MGCN":{ST_MGCN:[4,1,1,""]},"UCTB.model.ST_MGCN.ST_MGCN":{build:[4,3,1,""]},"UCTB.model.ST_ResNet":{ST_ResNet:[4,1,1,""]},"UCTB.model.ST_ResNet.ST_ResNet":{build:[4,3,1,""]},"UCTB.model.XGBoost":{XGBoost:[4,1,1,""]},"UCTB.model.XGBoost.XGBoost":{fit:[4,3,1,""],predict:[4,3,1,""]},"UCTB.model_unit":{BaseModel:[5,0,0,"-"],DCRNN_CELL:[5,0,0,"-"],GraphModelLayers:[5,0,0,"-"],ST_RNN:[5,0,0,"-"]},"UCTB.model_unit.BaseModel":{BaseModel:[5,1,1,""]},"UCTB.model_unit.BaseModel.BaseModel":{build:[5,3,1,""],close:[5,3,1,""],fit:[5,3,1,""],load:[5,3,1,""],load_event_scalar:[5,3,1,""],predict:[5,3,1,""],save:[5,3,1,""]},"UCTB.model_unit.DCRNN_CELL":{DCGRUCell:[5,1,1,""]},"UCTB.model_unit.DCRNN_CELL.DCGRUCell":{call:[5,3,1,""],compute_output_shape:[5,3,1,""],output_size:[5,3,1,""],state_size:[5,3,1,""]},"UCTB.model_unit.GraphModelLayers":{GAL:[5,1,1,""],GCL:[5,1,1,""]},"UCTB.model_unit.GraphModelLayers.GAL":{add_ga_layer_matrix:[5,3,1,""],add_residual_ga_layer:[5,3,1,""],attention_merge_weight:[5,3,1,""]},"UCTB.model_unit.GraphModelLayers.GCL":{add_gc_layer:[5,3,1,""],add_multi_gc_layers:[5,3,1,""]},"UCTB.model_unit.ST_RNN":{GCLSTMCell:[5,1,1,""]},"UCTB.model_unit.ST_RNN.GCLSTMCell":{call:[5,3,1,""]},"UCTB.preprocess":{GraphGenerator:[6,0,0,"-"],preprocessor:[6,0,0,"-"],time_utils:[6,0,0,"-"]},"UCTB.preprocess.GraphGenerator":{GraphGenerator:[6,1,1,""],scaled_Laplacian_ASTGCN:[6,4,1,""],scaled_laplacian_STGCN:[6,4,1,""]},"UCTB.preprocess.GraphGenerator.GraphGenerator":{AM:[6,2,1,""],LM:[6,2,1,""],adjacent_to_laplacian:[6,3,1,""],correlation_adjacent:[6,3,1,""],distance_adjacent:[6,3,1,""],haversine:[6,3,1,""],interaction_adjacent:[6,3,1,""]},"UCTB.preprocess.preprocessor":{MaxMinNormalizer:[6,1,1,""],Normalizer:[6,1,1,""],ST_MoveSample:[6,1,1,""],SplitData:[6,1,1,""],WhiteNormalizer:[6,1,1,""],ZscoreNormalizer:[6,1,1,""],chooseNormalizer:[6,4,1,""]},"UCTB.preprocess.preprocessor.MaxMinNormalizer":{inverse_transform:[6,3,1,""],transform:[6,3,1,""]},"UCTB.preprocess.preprocessor.ST_MoveSample":{move_sample:[6,3,1,""]},"UCTB.preprocess.preprocessor.SplitData":{split_data:[6,3,1,""],split_feed_dict:[6,3,1,""]},"UCTB.preprocess.preprocessor.WhiteNormalizer":{inverse_transform:[6,3,1,""],transform:[6,3,1,""]},"UCTB.preprocess.preprocessor.ZscoreNormalizer":{inverse_transform:[6,3,1,""],transform:[6,3,1,""]},"UCTB.preprocess.time_utils":{is_valid_date:[6,4,1,""],is_work_day_america:[6,4,1,""],is_work_day_china:[6,4,1,""]},"UCTB.train":{EarlyStopping:[7,0,0,"-"],MiniBatchTrain:[7,0,0,"-"]},"UCTB.train.EarlyStopping":{EarlyStopping:[7,1,1,""],EarlyStoppingTTest:[7,1,1,""]},"UCTB.train.EarlyStopping.EarlyStopping":{__best:[7,2,1,""],__p:[7,2,1,""],__patience:[7,2,1,""],__record_list:[7,2,1,""],stop:[7,3,1,""]},"UCTB.train.EarlyStopping.EarlyStoppingTTest":{__best:[7,2,1,""],__p_value_threshold:[7,2,1,""],__record_list:[7,2,1,""],__test_length:[7,2,1,""],stop:[7,3,1,""]},"UCTB.train.MiniBatchTrain":{MiniBatchFeedDict:[7,1,1,""],MiniBatchTrain:[7,1,1,""],MiniBatchTrainMultiData:[7,1,1,""]},"UCTB.train.MiniBatchTrain.MiniBatchFeedDict":{get_batch:[7,3,1,""],restart:[7,3,1,""],shuffle:[7,3,1,""]},"UCTB.train.MiniBatchTrain.MiniBatchTrain":{get_batch:[7,3,1,""],restart:[7,3,1,""],shuffle:[7,3,1,""]},"UCTB.train.MiniBatchTrain.MiniBatchTrainMultiData":{get_batch:[7,3,1,""],restart:[7,3,1,""],shuffle:[7,3,1,""]},"UCTB.utils":{multi_threads:[8,0,0,"-"]},"UCTB.utils.multi_threads":{multiple_process:[8,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"1080ti":[17,18],"10h":23,"7500m":23,"8700k":[17,18],"\u4e00\u5171\u6709428\u79cdpoi":25,"\u4e09\u4e2a\u57ce\u5e02\u7684poi\u6570\u91cf\u4e0echeck":25,"\u4e4b\u95f4":25,"\u5206\u522b\u4e3a\u5de5\u4f5c\u65e5":25,"\u5230":25,"\u534a\u5f84\u4e3a50km\u7684poi\u6570\u91cf":25,"\u5373\u6bcf\u4e2a\u7ad9\u70b9\u6709428\u7ef4\u7279\u5f81":25,"\u5373\u6bcf\u4e2a\u7ad9\u70b9\u7684\u7279\u5f81\u7ef4\u5ea6\u4e3a48":25,"\u53f3\u4fa7\u4e3a":25,"\u5404\u4e2a\u81ea\u884c\u8f66\u7ad9\u70b9\u9644\u8fd11km\u7684checkin\u603b\u6570\u91cf":25,"\u5747\u503c":23,"\u57ce\u5e02":25,"\u591a\u6b21\u5b9e\u9a8c\u7ed3\u679c":23,"\u5b9e\u9a8c\u7f16\u53f7":23,"\u5de5\u4f5c\u65e511707":25,"\u5de5\u4f5c\u65e52549":25,"\u5de5\u4f5c\u65e56049":25,"\u5de6\u4fa7\u4e3a":25,"\u5e73\u5747\u8017\u65f6":23,"\u6309\u7167\u5de5\u4f5c\u65e5\u548c\u8282\u5047\u65e5\u5206\u5f00":25,"\u65e5\u5747check":25,"\u65f6\u95f4\u8303\u56f4":25,"\u6682\u65f6\u53ea\u8dd1\u4e864\u6b21":23,"\u6700\u7ec8\u7ed3\u679c":23,"\u6807\u51c6\u5dee":23,"\u6a21\u578b\u7248\u672c\u542b\u4e49":23,"\u6bcf\u4e2a\u7ad9\u70b9\u7edf\u8ba1\u9644\u8fd11km\u51fa\u73b0\u7684poi\u7c7b\u578b":25,"\u6bcf\u6b21\u5b9e\u9a8c\u8017\u65f6":23,"\u6bcf\u6b21\u5b9e\u9a8c\u8017\u65f6\u7ea6":23,"\u7c97\u7565\u8ba1\u7b97\u6240\u6709\u7ad9\u70b9\u9644\u8fd11km\u7684checkin\u6570\u91cf\u603b\u548c":25,"\u7ea2\u8272\u4ee3\u8868\u5dee\u4e8efinetun":25,"\u7eff\u8272\u7684\u70b9\u8868\u793atransfer\u6548\u679c\u597d\u4e8efinetun":25,"\u8282\u5047\u65e511358":25,"\u8282\u5047\u65e52692":25,"\u8282\u5047\u65e55450":25,"\u8282\u5047\u65e5\u768424\u5c0f\u65f6checkin":25,"\u8ba1\u7b97":25,"\u8ba1\u7b97\u57ce\u5e02\u4e2d\u5fc3\u4e3a\u539f\u70b9":25,"\u8bad\u7ec3\u6837\u672c\u6570\u91cf":25,"abstract":6,"case":26,"class":[2,4,5,6,7,13],"default":[2,4,5,6,7,10,18],"final":[5,8,26],"float":[2,3,4,5,6,7,26],"function":[2,4,5,6,8],"import":[11,14,22,26],"in\u6570\u91cf":25,"int":[2,4,5,6,7,8,26],"long":[10,16,26],"new":[2,7,10,16,17,26],"null":7,"poi\u6570\u91cf":25,"public":[13,26],"return":[2,4,5,6,7,8,26],"rmse\u503c":23,"short":[10,17,18,19,26],"static":[4,5,6,7],"super":26,"true":[2,4,5,6,7,11,14,23,26],"try":[22,26],"veli\u010dkovi\u0107":10,"while":26,And:[11,12,16,26],For:[7,26],Its:[2,7],The:[2,4,5,6,7,8,10,11,12,17,18,26],Then:26,There:7,These:[4,10,26],Use:[9,17,18],Used:[2,6],Using:[16,22],With:26,__best:7,__init__:[5,26],__p:7,__p_value_threshold:7,__patienc:7,__record_list:7,__test_length:7,_graph:26,_input:26,_op:26,_output:26,aaai:[11,13],abc:6,abl:16,about:[9,13,17,18,19,26],academi:27,accept:[8,26],accord:[4,6,7,26],account:26,accus:26,acquir:26,activ:[4,5,27],adajac:6,adam:4,adamoptim:26,add:[5,18,26],add_ga_layer_matrix:5,add_gc_lay:5,add_multi_gc_lay:5,add_residual_ga_lay:5,added:5,adding:5,addit:[5,26],adf_test:4,adjac:[6,16,26],adjacent_matrix:[6,26],adjacent_to_laplacian:[6,26],adjust:[2,4],adopt:[16,26],adptiv:16,after:5,agcrn:[11,13],aggreg:[5,10],alajali:16,algorithm:[4,16,26],all:[2,4,6,8,20,23,26],almost:5,alpha:5,alreadi:[11,12],also:[2,5,6,11,12,13,26],alwai:16,america:6,among:[8,16,26],amp:10,analysi:4,analyt:26,anyth:6,api:[4,9,17,18,19,26],apidoc:29,append:[5,7,22,26],applehelp:29,applic:[10,13,26],appreci:[11,13],approxim:[4,5],apr:25,april:[16,27],arbitrari:2,architectur:[16,26],area:16,arg:[4,5,10,26],argu:4,argument:[5,26],arima:[0,1,10,11,13,17,18,19,28],arma:4,arrai:[6,22,26],arrang:2,array_lik:4,art:[11,13],as_default:26,assist:27,associ:27,assum:[5,16],astgcn:[11,13],astyp:26,attent:[4,5,10],attention_merge_weight:5,attet:16,attribut:[2,4,10,17,18,19],aug:27,augment:4,auto:[4,5],auto_load_model:5,autom:27,automat:5,autoregress:4,averag:[2,4,7,17,18,19],awesom:[11,13],axi:[4,22,26],bachelor:27,back:[12,13,16,17,18,19,26],bai:[10,13,16],base:[2,4,5,6,7,10,11,13,26],baselin:20,basemodel:[0,1,4,26,28],bash:[11,12],basi:16,basic:[2,26],basiclstmcel:26,batch:[4,5,7,26],batch_siz:[3,5,7,10,26],batchsiz:23,befor:5,begin:26,beij:[10,18],being:16,bellow:26,below:26,bengio:10,best:[7,10],better:[7,26],between:[2,6,10,26],bia:5,bidirect:16,big:27,bike:[4,9,13,14,18,22,26],bike_chicago:10,bike_dc:10,bike_nyc:10,bikeshar:26,bin:[11,12],binar:6,block:16,bool:[2,4,5,6,7],boost:[4,16],borrow:[],both:[4,5,11,13,16,26],box:[11,13],build:[2,4,5,6,9,13,14,29],build_uctb_dataset:26,built:[4,5,17,18],cach:5,cache_volum:5,calcul:[4,6],call:[5,6,7],callabl:4,can:[2,4,5,6,7,10,11,12,13,26],captur:[4,16],casanova:10,castleliang:[4,16],cell:5,certain:[2,6],chai:[10,27],chang:[2,6,7],channel:5,chapter:[11,13],characterist:6,charg:[9,11],chargest:10,chargestation_beij:10,chebyshev:[4,5],check:[7,26],chen:[16,27],chengdu:10,chenliyue2019:27,chicago:[10,13,17,18,26],china:[6,27],chines:27,chinesecalendar:[11,12],chongq:[10,19],choos:6,choosenorm:6,chose:26,circl:6,citi:[2,6,10,11,14,17,18,22,23,26,27],citywid:[4,16],cl_decay_step:4,clarifi:26,classic:[16,26],clip:4,close:[2,4,5,6,16,18,26],closeness_featur:[4,11,14,22],closeness_len:[2,4,6,11,14,22,26],closenss:6,cmd:29,code:[4,5,8,10,13,17,18,26,29],code_vers:[4,5,26],codevers:23,coeffici:6,collect:[17,18,26],color:[17,18],com:27,combin:[8,16],commonli:26,commonmark:29,compar:[11,26],compat:26,complet:[16,26],complex:24,compon:[4,16,26],compos:[4,6,16],comput:[3,5,6,12,13,26,27],compute_output_shap:5,concat:[4,10,24],concaten:[2,6,22,26],concret:26,conduct:[10,26],confid:27,config:[11,14],consecut:[2,4,6],consid:[],considerd:4,consist:[2,4,6,7,16,26],constant:16,construct:[2,11,13,26],constructor:26,contain:[2,11,13,26],content:28,continu:26,contrib:26,contribut:26,contribute_data:2,contributor:9,conv_filt:[4,10],convent:[11,13],converag:[17,18],converg:[22,26],convert:6,convolut:[4,5,10],coordin:2,correl:[4,6,10,11,14,16,17,18,19,23,26],correlation_adjac:6,correspond:[4,5,6,26],cosin:25,count:[13,26],cover:[],cpu:[17,18],creat:2,crowd:[4,11,16],cse:27,cucurul:10,cug:27,cui:27,cuizhenyu18:27,cummin:26,current:[4,5,7,10,11,13,26,29],custom:[4,26],customizeddemo:26,cut:8,dai:[2,4,6,16,26],daili:[4,17,18,19],daily_slot:[2,6],data:[2,3,4,5,6,7,8,10,13,14,17,18,19,26,27],data_dir:2,data_list:8,data_load:[0,1,4,6,11,14,22,26,28],data_rang:[2,10,26],datafram:4,dataload:2,datarang:23,dataset:[0,1,4,5,6,9,13,14,17,18,19,22,23,28],dataset_nam:26,datatyp:2,date:6,date_str:6,datetim:6,dateutil:[11,12],davidham3:16,dcgru:10,dcgrucel:5,dchai:27,dcrnn:[0,1,10,11,13,28],dcrnn_cell:[0,1,28],debug:4,decid:7,decim:6,decis:16,decod:[4,16],deep:[4,5,10,27],deeper:[17,18],deepst:[0,1,11,13,28],def:26,defin:26,definit:6,degre:[4,6,27],demand:[4,11,16,26],demonstr:26,denorm:6,dens:[4,10,18,19,24,26],denseunit:[18,19,23],depart:27,depend:[4,16],depth:[4,10],describ:[4,16],descript:26,design:[16,26],desir:26,detail:[10,11,13,26],determin:5,devhelp:29,deviat:6,devic:23,dichai:[11,12],dickei:4,dict:[2,4,5,6,7,26],dictionari:[6,7],didi:[8,9],didi_chengdu:10,didi_xian:10,differ:[4,6,8,9,11,16],differenc:4,diffus:[4,10],dim:26,dimens:[2,4,5,6,7,26],direct:25,directli:[2,7],directori:[2,4,5],dis_matrix:26,disabl:5,disk:5,distacn:6,distanc:[2,6,10,17,18,19,23,26],distance_adjac:6,distribut:[4,8,26],distribute_list:8,divid:[6,7],divis:26,dnn:[4,16],docker:9,docstr:29,document:13,domain:[4,16],driven:[4,10,16],drop:4,dropout:4,dropout_r:4,dtype:[5,26],dump:26,dure:[2,6],dynam:[4,16],dynamic_rnn:26,each:[4,6,7,8,26],earli:[4,5,7,16,26],earlier:2,early_stop_length:5,early_stop_method:5,early_stop_pati:5,earlystop:[0,1,5,28],earlystoppingttest:7,earth:6,easi:[4,16],edu:27,effect:26,effort:26,either:26,electr:[],element:[6,26],els:[4,5,26],email:27,embed:2,empir:16,emploi:16,empti:2,encod:[4,16],end:[2,4,16,26],engin:27,enough:7,ensur:20,epoch:[5,23,26],epsilon:4,equal:[3,4,5,6,7],error:22,eslength:23,especi:20,estimat:10,etc:[11,26],euclidean:16,eval_metr:4,evalu:[0,1,4,9,10,14,17,18,22,26,28],evaluate_loss_nam:5,everi:[2,4,6],exact:[2,4,6],exampl:26,exce:7,except:[5,22],execut:26,exist:[5,26],expand_dim:26,expect:7,experi:[9,20,26],explain:5,explan:[17,18,19,23],explicitli:16,extend:26,extern:[2,4,16],externai_dim:4,external_dim:[2,4,14],external_featur:[4,14],external_feature_weath:26,externalfeatur:26,extra:16,extract:[2,6,26],factor:[4,16,26],fail:22,fals:[2,4,5,6,7,22,23,26],fan:16,fang:27,fangjiangyi2001:27,far:[4,16],feather:26,featur:[2,4,5,6,7,18,24],feb:27,februari:16,feed_dict:[6,7],feng:16,field:26,file:[2,4,5,8,10],filenam:[4,5],fill:26,filter:4,final_st:26,find:26,finetun:25,finish:22,first:[7,11,12,26],firstli:26,fit:[4,5,11,14,22,26],five:10,fix:26,flag:5,flexibl:[11,13],float32:[5,26],flog:5,flow:[4,10,16,18],follow:[10,11,12,13,17,18,19,26],forecast:[4,10,16],forecast_step:[4,22],forget:26,format:[2,6,26],former:[2,4,6],found:[5,10,26],foxmail:27,frame:4,framework:16,fratur:4,free:5,from:[2,4,5,6,7,8,9,12,14,16,22,27],fujian:27,fuller:4,further:2,fuse:[4,16],fusion:[4,16],futur:[4,16,26],gal:[4,5,10,24],galhead:[18,19,23],galunit:[18,19,23],gate:[5,10],gattel:[18,19],gbrt:[10,17,18,19],gc_output:5,gc_rate:4,gcl:5,gcl_k:4,gcl_l:4,gclstm:[4,10,17,18,19,24],gclstm_layer:4,gclstmcell:5,gcn:[4,5],gcn_k:[4,5],gcn_l:5,gcn_layer:4,gener:[4,6,7,16,26],generaliz:10,geng:[4,16],geo:4,geograph:6,geoman:[0,1,11,13,28],geoscienc:27,ger:26,get:7,get_a_cel:26,get_batch:7,get_ord:4,gird_lat_lng:26,github:[4,16],give:4,given:6,gll:[18,19,23],global:[4,16],global_featur:4,global_step:5,gmail:27,gman:[11,13],goal:26,good:26,got:27,gpu:[4,5,11,12,17,18],gpu_devic:[4,5,26],gputil:[11,12],gradient:[4,16],graduat:27,granular:[2,10],graph:[2,4,5,6,9,10,11,14,17,18,19,24],graph_merg:4,graph_merge_gal_num_head:4,graph_merge_gal_unit:4,graph_nam:26,graph_obj:14,graphbuild:26,graphgener:[0,1,14,26,28],graphmodellay:[0,1,28],graphwavenet:[11,13],great:6,greater:6,grid:[4,10,26],gridlatlng:26,ground:4,group:[9,23],gru:4,gtx:[17,18],guo:16,guoshnbjtu:16,hail:[4,16],handl:[5,26],hang:27,has:2,have:[2,4,6,7,11,12,17,18],haversin:[6,26],head:[4,5,18,19],heapq:26,height:4,help:[6,26],here:[10,26],heurist:26,hidden:[4,5,18,19,26],high:27,highest:[4,5],highest_protocol:26,highli:[11,12],his:27,hisrori:4,histor:[4,26],histori:[2,4,6],hm_obj:22,hmm:[11,13,17,18,19,26],hmmlearn:[11,12,16],hoc:26,hoel:16,hold:5,holidai:[6,26],homepag:[12,13,16,17,18,19,26,27],hong:27,hour:[17,18],how:[2,13,26],html:29,htmlhelp:29,http:[11,12],huazhong:27,hub:[11,12],hyperparamet:26,hypothesi:7,hyymmmint:27,iclr:[11,13],ident:7,ignor:4,ijcai:[11,13],ild:6,illustr:26,imag:15,implement:[4,5,10,11,13,16,26],in_arg:6,includ:[4,5,6,13,16,26],incorpor:[4,16],ind:26,independ:7,index:[2,8],indic:2,inform:[5,8,16,26],inherit:[5,6,26],init:[4,5,11,14,26],init_var:[4,5,26],initi:[4,5,6,26],input:[2,4,5,6,7,8,16,26],input_dim:[4,5,26],input_shap:5,input_step:[4,26],input_transform:4,inspect:26,instal:9,instanc:[4,16],instead:[5,26],integ:[2,4,5,8],integr:26,interact:[2,6,10,17,18,19,23,26],interaction_adjac:6,interaction_matrix:6,interatct:6,interest:26,interfac:26,interl:[17,18],intern:7,intersect:16,interv:[7,26],introduc:10,introduct:9,inverse_transform:6,is_train:2,is_valid_d:6,is_work_day_america:[2,6],is_work_day_china:6,iter:4,its:[2,6,10,26],jan:27,jiang:16,jiangyi:27,jin:27,jinxu:27,job:8,job_i:8,jsmath:29,jul:27,juli:16,junbo:4,just:26,keep:[4,5],kei:[6,7,9,26],kera:[5,11,12],kernal_s:10,kernel:4,kernel_initi:5,kernel_s:[4,10],keyword:5,kind:4,know:[17,18,19],knowledg:26,kong:27,kwarg:[2,4,5,6,26],lab:27,label:4,laboratori:27,lag:4,land:[4,16],lapalac:6,laplac:6,laplace_matrix:[11,14],laplacian:[5,6,26],laplacian_matrix:5,larger:6,last:[7,22],lat1:6,lat2:6,lat:26,lat_lng_list:[6,26],late:[4,16],later:2,latest:[2,6,18],latitud:[2,6],layer:[4,5,10,18,19,26],leaky_relu:5,learn:[4,10,11,12,19,26,27],learner:4,least:26,leibai:16,len:[4,26],length:[2,4,5,6,7,18,22,26],lentimeslot:26,less:[2,4],let:26,level:4,ley:27,leyewang:27,liang:[4,16],librari:4,life:[17,18,19],like:5,likelihood:4,limit:7,lin:16,line:[6,10,19,23,26],linear:26,link:6,lio:10,list:[2,4,5,6,7,8,26],liu:[10,16,27],live:5,liyaguang:[4,16],liyu:27,lng:26,load:[5,26],load_event_scalar:5,loader:[2,11,14,26],local:[4,16,26],local_featur:4,locat:6,locker:8,log:5,logic:5,lon1:6,lon2:6,longbiao:27,longbiaochen:27,longitud:[2,6],look:26,loss:[5,26],lot:26,lower:26,lstm:[4,5,10,16,17,18,19,26],lstm_layer:4,lstm_unit:4,lstmc:10,lstmcell:5,lstmunit:[18,19,23],lucktroi:[4,16],machin:[4,16],mai:[2,4,27],mail:27,main:[2,10],major:[4,16,27],make:[4,16,26],make_concat:2,mani:[2,5,6,26],map:[10,17,18],mape:[3,23],march:27,mark:[10,26],markdown:29,markov:26,master:27,match:5,matplotlib:26,matric:[4,6],matrix:[4,5,6,16,26],matrx:26,max:[2,4,5],max_ar:4,max_d:4,max_depth:[4,22,26],max_diffusion_step:[4,5],max_epoch:[5,26],max_lag:4,max_ma:4,max_to_keep:[4,5,26],maximum:[4,6],maxminnorm:6,mean:[4,6,17,18,19],mechan:[4,16,26],melbourn:13,member:26,memori:[5,10,17,18,26],merg:[4,24],merge_data:2,merge_gal_unit:5,mergeindex:[2,10,26],mergewai:2,meta:10,meteorolog:[4,16],meter:6,method:[2,4,5,6,7,20,24,26],metr:10,metr_la:10,metric:[0,1,4,11,14,22,26,28],metro:[9,23,26],metro_chongq:10,metro_shanghai:[10,26],mgcn:[4,5,10,11,13],million:[],min:2,min_max_denorm:[11,14,26],min_max_norm:[],mini:5,minibatchfeeddict:7,minibatchtrain:[0,1,28],minibatchtrainmultidata:7,minim:26,minimum:6,minmax01scal:[],minmax11scal:[],minut:[2,10,26],mode:4,model:[0,1,2,5,7,9,10,13,17,18,19,22,28],model_dir:[4,5,26],model_obj:22,model_r:4,model_unit:[0,1,4,9,26,28],modifi:10,modul:[0,16,28],month:[6,26],month_num:2,monthli:2,more:[4,5,8,11,13,17,18,19,26],move:4,move_sampl:6,multi:[4,5,10,17,18,19,24],multi_thread:[0,1,28],multipl:16,multiple_process:8,multirnncel:26,must:[4,5,26],my_dataset:26,my_lstm:26,my_model:26,mymodel:26,n_decoder_hidden_unit:4,n_encoder_hidden_unit:4,n_estim:[4,22,26],n_iter:[22,26],n_jo:8,n_job:8,n_rout:6,n_stacked_lay:4,naiv:[4,5],name:[2,5,10,24,26],ndarrai:[2,3,4,5,6,7,26],nearest:26,necessari:26,need:[2,4,5,6,26],neighbor:[6,19],neighbour_adjac:26,nerual:16,network:[4,5,10,17,18,19],neural:[2,4,5,6,10],neurip:[11,13],new_valu:7,newaxi:26,newest:7,next:26,nlargest:26,nni:[10,11,12],node:[2,4,5,6,22,26],node_monthly_interact:2,node_num:[2,4],node_satation_info:26,node_station_info:[2,26],node_traff:2,nodetrafficload:[2,6,11,14,22,26],non:16,none:[2,3,4,5,26],nonetyp:26,norm:4,normal:[2,4,6,11,14,22,23,26],notat:23,note:[2,4,26],noth:5,nov:27,novel:16,novemb:[10,16],now:[2,4,6,26,27],num:[6,26],num_compon:[22,26],num_conv_filt:4,num_dense_unit:4,num_diffusion_matrix:4,num_featu:5,num_featur:5,num_graph:[4,5,11,14],num_head:5,num_hidden_unit:4,num_lay:26,num_nod:[4,5,6,11,14],num_proj:5,num_residual_unit:[4,10],num_rnn_lay:4,num_rnn_unit:4,num_stat:26,num_unit:[5,26],number:[2,4,5,6,7,8,10,17,18,19,26],numpi:[6,11,12,22,26],nvidia:[11,12,17,18],nyc:[4,10,11,13,14,17,18,22,26],obj:10,object:[2,4,5,6,7,11,14,22,26],observ:4,obtain:6,octob:16,often:16,onc:7,one:[2,4,5,6,7,8,26],onli:[4,7,18,26],op_nam:5,open:[11,13,26],oper:[4,26],operation1_nam:5,operation2_nam:5,ops:5,optim:[4,5,26],optimizer_nam:4,option:[2,4,26],order:[4,5,7,22],org:[11,12],orgin:6,origin:2,other:[2,5,9,11,16,26],otherwis:[4,5,6,7,26],othewis:2,our:[5,10,16],output:[4,5,8,26],output_activ:4,output_dim:[4,26],output_dir:26,output_nam:[5,11,14],output_s:5,output_step:[4,26],output_tensor1_nam:5,output_tensor1_valu:5,output_tensor_name1:5,output_tensor_name2:5,outputs_dict:5,overal:25,overwrit:5,own:[2,5,6,9,13],p_test:22,p_value_threshold:7,packag:[0,9,11,12,13,16,26,28,29],page:[11,12],pair:[2,6,7,26],pan:16,panda:[11,12,16],paper:16,param:[2,5,6,17],paramet:[2,3,4,5,6,7,8,10,17,18,19,24,26],part:[4,8,16],partit:8,partition_func:8,pass:[4,26],past:26,path:[2,26],patienc:[7,23],pattern:16,pearson:6,pedestrian:[13,26],peke:27,pem:10,pems_bai:10,penultim:[18,19],per:5,perform:[5,26],period:[2,4,6,16,18,26],period_featur:[4,11,14,22],period_len:[2,4,6,10,11,14,22,26],perspect:16,phase:26,pickl:[2,26],piec:[2,4,6],pip:[11,12],pkl:26,pkl_file_nam:26,pku:27,placehold:26,pleas:[17,18,19],plot:26,pls:8,plt:26,poi:26,point:[4,6,26],polynomi:[4,5],popular:26,portal:[],posit:[2,6],practic:26,predict:[2,3,4,5,6,10,13,14,18,22,26],prediction_test:22,preprocess:[0,1,9,14,17,18,19,26,28],preprocessor:[0,1,28],presenc:4,present:4,preset:26,previou:4,print:[5,11,14,22,26],print_dataset:26,problem:26,process:[2,4,6,8,16,24],produc:5,professor:27,project:26,proper:6,properti:[4,5,16],proport:2,protocol:26,provid:[5,11,13,26],pull:[11,12],pyplot:26,python:[5,10,11,12,26],pytorch:[4,16],pyyaml:[11,12],qthelp:29,quick:9,quickstart:[4,26],random:16,rang:[2,22,26],rate:[4,19],ratio:[2,4,6,25],ratio_list:6,ration:5,raw:6,real:[17,18,19,26],realiz:10,recent:26,recognit:16,recommend:[11,12],recommonmark:29,record:[2,6,7,10,17,18,19,26],recurr:[4,5,10],reduc:[8,26],reduce_func:8,reduce_mean:26,refer:[4,8,9,10,12,16,17,18,19,26],reg:[4,22,26],region:16,regular:5,rel:2,relat:[26,29],releas:[5,13,26],remain:[17,18],remov:[2,3,17,18,19],repo:[11,13],repositori:[4,13,16,26],repres:[5,6],represent:5,requir:[11,12,16,26],reserv:4,reshap:[22,26],residu:[4,5,16],residual_unit:10,resnet:[4,10,11,13],resourc:15,respect:[10,17,18],restart:7,restor:6,result:[2,4,5,9,11,14,16,18,19,25,26],return_output:5,reus:5,revers:26,rgal:24,ride:[4,10,13,16,17,18,19,26],rideshar:11,rmse:[3,4,11,14,22,23,26],rnn:[4,5,26],rnn_cell:26,rnn_cell_impl:5,rnncell:5,romero:10,root:4,rtcat:29,rtd:29,run:[10,11,12,26,29],runtim:[11,12],sai:26,same:[2,3,4,5,6],sampl:[4,7,16],save:[4,5,26],save_model:5,save_model_nam:5,saver:[4,5],scalar:5,scalar_nam:5,scaled_laplacian_astgcn:6,scaled_laplacian_stgcn:6,scenario:26,schedul:16,schmidhub:26,scienc:27,scikit:[11,12],scipi:[4,11,12],scratch:7,search:17,season:[4,16],seasonal_ord:[4,22],second:[2,26],section:26,see:[2,4,7,11,13,26],select:[2,6],self:[2,6,16,26],send:8,senior:[],sens:27,sensor:4,sensori:4,sep:27,sept:25,seq_len:4,sequenc:[4,5,26],sequence_length:[5,6,7,11,14,26],seri:[4,26],serial:4,serializinghtml:29,session:[5,7],set:[2,4,5,7,9,17,18,19,26],seven:[2,4,6],sever:7,sgd:4,shahabi:[10,16],shall:2,shanghai:[10,19,23,26],shanghaiv1:23,shape:[2,3,4,5,6,11,14,22,26],share:[10,13,26],share_queu:8,shawnwang:[4,16],should:[2,4,5,6,7,8,26],show:[10,17,18,19,26],shuffl:[5,7],shuffle_data:5,side:7,sigmoid:4,signific:[17,18,19],sigspati:[11,13],silent:4,similar:[2,4,16,25],simpl:26,simpli:4,sinc:[4,17,18,19,26],singl:[2,10],singlegraph:[17,18],size:[4,5,7],skip:[11,12],slot:[2,4,6,26],small:7,smaller:[3,6,7,17,18,19],smallest:3,smart:27,snowbridg:27,softmax:5,softwar:27,some:[11,13],song:16,sort:2,sourc:[11,13,17,18],span:[7,10,17,18,19],spars:4,spatial:[4,5,10,11,13,26],spatio:[4,10,26],spatiotempor:[4,26],specifi:[2,4,5,6,10,26],speed:[9,13,26],sphinx:29,sphinxcontrib:29,split:[2,4,6,26],split_data:6,split_feed_dict:6,split_timestep:4,splitdata:[6,26],sqrt:26,squar:26,squarederror:[4,22],squeez:26,st0:23,st_method:4,st_mgcn:[0,1,10,17,18,28],st_movesampl:6,st_resnet:[0,1,5,10,28],st_rnn:[0,1,28],st_sim1_0:23,st_sim_0:23,stack:4,stacked_cel:26,stacked_output:26,stage:[17,18,19],standard:6,standardscal:[],start:[2,9,26],stat:[],state:[5,11,13,16],state_is_tupl:26,state_s:5,station:[2,4,9,11,17,19,22,26],station_index:22,station_numb:[2,11,14,22,26],stationinfo:[2,26],statist:16,statsmodel:[11,12,16],statu:26,std:[],step:[2,4,5,6],stgcn:[11,13],stmeta:[0,1,5,9,13,17,18,19,23,28],stmeta_master_bik:[17,18],stmeta_obj:[10,11,14],stmeta_obj_topk:26,stmeta_v0:10,stmeta_v1:[10,26],stmeta_v2:10,stmeta_v3:10,stop:[5,7,26],store:[2,4,5,6,26],str:[2,4,5,6],stream:2,string:[2,4,5,6],strnn:4,strongli:26,structur:[4,11,13,16],stsgcn:[11,13],stu:27,student:27,subclass:26,subpackag:28,subscript:5,subset:6,substitut:26,sum:2,supplementari:2,support:[5,10,11,13,26],system:[10,16,26],tabl:29,tail:7,take:[7,26],tanh:[4,5],target:[3,4,6,7,11,14,26],target_len:4,target_length:[2,6,26],target_nod:26,target_nodz:26,target_st:26,task:[4,8,11],task_func:8,tech:[4,16],techniqu:[5,10],technolog:27,temperatur:4,tempor:[2,4,5,6,10,11,13,24],temporal_merg:4,temporal_merge_gal_num_head:4,temporal_merge_gal_unit:4,temporam:4,tengfei:27,tensor:[5,26],tensorboard:5,tensorflow:[4,5,16,26],tensorshap:5,term:[10,26],test:[2,4,5,7,10,11,14,22,26],test_clos:[2,11,14,22,26],test_ef:14,test_i:[2,11,14,22,26],test_norm:[],test_period:[2,11,14,22,26],test_predict:22,test_prediction_collector:22,test_ratio:[2,26],test_rms:[22,26],test_sequence_len:[11,14,26],test_trend:[2,11,14,22,26],test_x:26,tf66366:27,than:[2,3,4,6,7,17,18,19,26],thei:7,them:[6,16,26],theme:29,theoret:16,therefor:26,thi:[4,5,6,7,11,12,13,26,29],those:7,thread:8,three:[4,8,10,16],threshold:[3,6,7,11,14,18,19,22,23,26],threshold_correl:[6,26],threshold_dist:[6,26],threshold_interact:[6,26],threshold_neighbour:26,through:[16,26],thu:5,till:27,time:[2,4,6,7,10,17,18,19,26],time_fit:[2,6,26],time_index:22,time_rang:[2,26],time_sequ:[4,22],time_seri:4,time_slot_num:[2,4],time_util:[0,1,28],timefit:[2,26],timerang:[2,26],timestep:[4,26],tkde:[11,13],tmeta:10,tmp_dir:26,togeth:6,toi:26,too:2,tool:[11,13],toolbox:13,toolkit:10,topkgraph:26,total:4,total_sens:4,traffic:[2,4,9,13,16,18,26],traffic_data:[6,26],traffic_data_index:26,traffic_grid:26,traffic_monthly_interact:26,traffic_nod:26,trafficgrid:26,trafficmonthlyinteract:[2,26],trafficnod:[2,26],train:[0,1,2,4,5,9,13,14,17,18,22,23,26,28],train_clos:[2,11,14,22,26],train_data_length:[2,10],train_ef:14,train_i:[2,11,14,22,26],train_loss:26,train_norm:[],train_op:[5,26],train_period:[2,11,14,22,26],train_sequence_len:[11,14,26],train_time_slot_num:2,train_trend:[2,11,14,22,26],train_x:26,trainabl:[5,17,18],trainable_var:26,trainbl:26,traindai:23,transfer:[6,25],transform:[6,26],transpos:22,tree:[4,16],trend:[2,4,6,16,18,26],trend_featur:[4,11,14,22],trend_len:[2,4,6,10,11,14,22,26],trigger:7,truth:4,tupl:5,turn:6,tutori:[5,9,13],two:[2,4,6,7,16],type:[2,4,5,6,7,26],uca:27,uctb:[0,13,14,22,29],ultim:26,undergradu:27,uniqu:[4,16],unit:[4,5,10,13,16,18,19],univari:4,univers:27,updat:29,upgrad:[11,12],urban:[13,26],usag:26,use:[2,4,5,10,11,12,13,16,17,18,26],use_bia:5,use_curriculum_learn:4,use_gc_for_ru:5,used:[2,4,5,6,8,10,16,17,18,19,26],useful:26,user:6,uses:[19,26],using:[4,5,6,9,16,22],ust:27,util:[0,1,9,28],val:[],val_loss:[5,26],val_norm:[],valid:[4,5,6,26],validate_ratio:[5,26],valu:[4,6,7,18,19,23,26],variabl:[7,17,18,26],variable_nam:26,variant:10,variou:[11,26],vector:6,vehicular:16,verbos:[4,5],veritasyin:16,version:[4,5,9,11,12,26,29],vertic:6,via:26,view:[13,17,18],vision:27,visual:[10,17,18,26],vstack:26,wai:6,walk:16,wan:16,wang:[10,16,27],want:26,washington:[],wavenet:16,weather:26,week:[2,4,6],weekli:4,weight:[5,6],welcom:26,well:[11,13,26],wen:16,wenji:27,wget:[11,12],what:26,when:[2,4,5,7,26,29],where:[4,5,6,8],whether:[5,7,26],which:[4,5,6,8,16,26],whitenorm:6,whole:[5,26],whose:[2,7,26],wide:16,width:4,william:16,wind:4,window:[17,18],with_lm:[22,26],with_tp:[2,4,26],without:6,wjycc:27,won:6,work:4,workday_pars:2,wors:7,worth:26,wrapper:26,www:[11,12],x_train:6,xgboost:[0,1,10,11,12,13,17,18,19,26,28],xiamen:27,xian:10,xmu:27,xueqiao:27,yaguang:4,yang:[10,16,27],yao:16,yayao:27,yin:16,yml:[10,26],york:[10,17,26],yoshal:[4,16],you:[5,6,11,12,13,26],your:[2,5,6,9,13],yuxuan:4,yyyi:[2,26],zero:[3,22,26],zhang:[4,16],zheng:16,zhenyu:27,zhou:16,zhu:[16,27],zhuhang:27,zscore:6,zscorenorm:6},titles:["<span class=\"section-number\">5. </span>API Reference","UCTB package","<span class=\"section-number\">5.1. </span>UCTB.dataset package","<span class=\"section-number\">5.5. </span>UCTB.evaluation package","<span class=\"section-number\">5.4. </span>UCTB.model package","<span class=\"section-number\">5.3. </span>UCTB.model_unit package","<span class=\"section-number\">5.2. </span>UCTB.preprocess package","<span class=\"section-number\">5.6. </span>UCTB.train package","<span class=\"section-number\">5.7. </span>UCTB.utils package","Welcome to UCTB\u2019s documentation!","<span class=\"section-number\">6. </span>Results on different datasets","Urban Computing ToolBox","<span class=\"section-number\">2. </span>Installation","<span class=\"section-number\">1. </span>Introduction","<span class=\"section-number\">3. </span>Quick start","&lt;no title&gt;","Currently Supported Models","Experiments on bike traffic-flow prediction","Experiments on Charge-Station demand station","Experiments on subway traffic-flow prediction","Purpose","&lt;no title&gt;","Quick Start with HM (Historical Mean)","Stable Test Records","Different versions of STMeta","Check-In\u4e0ePOI\u6570\u636e\u5904\u7406\u65b9\u6cd5","<span class=\"section-number\">4. </span>Tutorial","<span class=\"section-number\">7. </span>About us (UCTB Group)","UCTB","&lt;no title&gt;"],titleterms:{"\u4f7f\u7528check":25,"\u4f7f\u7528poi\u4fe1\u606f\u8fdb\u884c\u76f8\u4f3c\u7ad9\u70b9\u5339\u914d":25,"\u5206\u6790transfer\u6548\u679c\u5728\u57ce\u5e02\u4e2d\u7684\u5206\u5e03":25,"\u6570\u636e\u8be6\u60c5":25,"\u7279\u5f81\u76f8\u4f3c\u5ea6\u65b9\u6cd5":25,"\u7279\u5f81\u8ba1\u7b97\u65b9\u6cd5":25,"class":[11,26],"function":26,"in\u4e0epoi\u6570\u636e\u5904\u7406\u65b9\u6cd5":25,"in\u6570\u636e\u8fdb\u884c\u76f8\u4f3c\u7ad9\u70b9\u7684\u5339\u914d":25,"poi\u7279\u5f81\u8ba1\u7b97\u65b9\u6cd5":25,Adding:19,Use:[11,26],about:27,abov:26,adapt:16,agcrn:16,analysi:26,api:[0,11],arima:[4,16,22],astgcn:16,attenion:16,attent:16,autoregress:16,averag:16,base:16,basemodel:5,beij:23,bike:[10,11,17],build:[11,23,26],call:26,charg:[10,18],chargest:23,check:25,chengdu:23,chicago:25,citi:25,close:[17,19],comput:11,content:1,contribut:11,contributor:27,convolut:16,current:16,data:[11,16],data_load:2,dataset:[2,10,11,26],dcrnn:[4,16],dcrnn_cell:5,deep:16,deepst:[4,16],delai:11,delet:17,demand:18,didi:[10,23],differ:[10,24],diffus:16,docker:[11,12],document:9,earlystop:7,evalu:[3,11],exampl:11,experi:[10,11,17,18,19],featur:[17,19,26],flow:[11,17,19],from:[11,26],full:11,futur:17,geo:16,geoman:[4,16],gman:16,graph:[16,23,26],graphgener:6,graphmodellay:5,graphwavenet:16,group:27,hidden:16,histor:[16,22],hmm:[16,22],instal:[11,12],integr:16,introduct:[11,13],kei:27,latest:17,learn:16,level:16,locat:26,markov:16,mean:[16,22],metric:3,metro:[10,11],mgcn:16,minibatchtrain:7,mode:19,model:[4,11,14,16,23,26],model_unit:5,modelunit:11,modifi:26,modul:[1,2,3,4,5,6,7,8,26],move:16,multi:16,multi_thread:8,multipl:26,network:16,neural:16,nyc:25,onli:17,other:14,own:[11,26],packag:[1,2,3,4,5,6,7,8],paramet:23,period:19,predict:[11,16,17,19],preprocess:6,preprocessor:6,purpos:20,quick:[11,14,22],realiz:26,record:23,recurr:16,redefin:26,refer:[0,11],regress:26,resnet:16,result:[10,17],search:10,sensori:16,seri:16,set:10,singl:26,space:10,spatial:16,spatio:16,spatiotempor:16,speed:10,st_mgcn:4,st_resnet:4,st_rnn:5,stabl:23,start:[11,14,22],statement:26,station:[10,18],statist:10,step:[11,12],stgcn:16,stmeta:[4,10,11,14,16,24,26],stsgcn:16,subpackag:1,subwai:19,support:16,synchron:16,target:25,tempor:[16,26],tensorflow:[11,12],test:23,time:16,time_util:6,toolbox:11,top:26,topk:26,traffic:[10,11,17,19],train:[7,11],tutori:[11,26],uctb:[1,2,3,4,5,6,7,8,9,11,12,26,27,28],unit:11,urban:11,using:[11,26],util:8,version:[10,17,24],welcom:9,xgboost:[4,16,22],xian:23,your:[11,26]}})