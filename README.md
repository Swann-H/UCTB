# UCTB (Urban Computing Tool Box)

 [![Python](https://img.shields.io/badge/python-3.6%7C3.7-blue)]() [![PyPI](https://img.shields.io/badge/pypi%20package-v0.3.5-sucess)](https://pypi.org/project/UCTB/) [![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)]() [![Documentation](https://img.shields.io/badge/api-reference-blue.svg)](https://uctb.github.io/UCTB)

------

**Urban Computing Tool Box** is a package providing [**urban datasets**](https://github.com/uctb/Urban-Dataset), [**spatial-temporal prediction models**](https://github.com/uctb/UCTB), and [**visualization tools**](https://github.com/uctb/visualization-tool-UCTB) for various urban computing tasks, such as traffic prediction, crowd flow prediction, ridesharing demand prediction, etc. 

UCTB is a flexible and open package. You can use the data we provided or use your data, and the data structure is well stated in the [**document**](https://uctb.github.io/UCTB/md_file/urban_dataset.html#). 

## News

**2021-11**: Our paper on UCTB, entitled '*Exploring the Generalizability of Spatio-Temporal Traffic Prediction: Meta-Modeling and an Analytic Framework*', has been accepted by IEEE TKDE! [[IEEE Xplore](https://ieeexplore.ieee.org/document/9627543)][[arXiv](https://arxiv.org/abs/2009.09379)]

**2023-06**: We have released a technical report entitled '*UCTB: An Urban Computing Tool Box for Spatiotemporal Crowd Flow Prediction*', introducing the design and implementation principles of UCTB. [[arXiv\]](https://arxiv.org/abs/2306.04144)

------

## Urban Datasets

UCTB releases [a public dataset repository](https://github.com/uctb/Urban-Dataset) including the following applications:

| **Application**  | **City**  | **Granularity** |                      **Download Link**                       |
| :--------------: | :-------: | :-------------: | :----------------------------------------------------------: |
|   Bike-sharing   |    NYC    |    5 minutes    | [66.0M](https://github.com/uctb/Urban-Dataset/blob/main/Public_Datasets/Bike/5_minutes/Bike_NYC.zip) |
|   Bike-sharing   |  Chicago  |    5 minutes    | [30.2M](https://github.com/uctb/Urban-Dataset/blob/main/Public_Datasets/Bike/5_minutes/Bike_Chicago.zip) |
|   Bike-sharing   |    DC     |    5 minutes    | [31.0M](https://github.com/uctb/Urban-Dataset/blob/main/Public_Datasets/Bike/5_minutes/Bike_DC.zip) |
| Pedestrian Count | Melbourne |   60 minutes    | [9.44M](https://github.com/uctb/Urban-Dataset/blob/main/Public_Datasets/Pedestrian/60_minutes/Pedestrian_Melbourne.pkl.zip) |
|  Vehicle Speed   |    LA     |    5 minutes    | [11.8M](https://github.com/uctb/Urban-Dataset/blob/main/Public_Datasets/Speed/5_minutes/METR_LA.zip) |
|  Vehicle Speed   |    BAY    |    5 minutes    | [27.9M](https://github.com/uctb/Urban-Dataset/blob/main/Public_Datasets/Speed/5_minutes/PEMS_BAY.zip) |
|   Ride-sharing   |  Chicago  |   60 minutes    | [17.5M](https://github.com/uctb/Urban-Dataset/blob/main/Public_Datasets/Taxi/60_minutes/Taxi_Chicago.zip) |

We provide [detailed documents](https://github.com/uctb/Urban-Dataset/blob/main/Tutorial/tutorial.ipynb) about how to build and how to use these datasets.

------

## Prediction Models

Currently, the package supports the following models: (This toolbox is constructed based on some open-source repos. We appreciate these awesome implements. [See more details](https://uctb.github.io/UCTB/md_file/predictive_tool.html#)). 

|  Model Name  |   Input Data Format   |   Spatial Modeling Technique   |Graph Type|Temporal Modeling Technique|Temporal Knowledge|Module|
| ---- | ---- | ---- |----|----|----|----|
|   ARIMA   |   Both   |   N/A   |N/A|SARIMA|Closeness|``UCTB.model.ARIMA``|
|   HM   |   Both   |   N/A   |N/A|N/A|Closeness|``UCTB.model.HM``|
|   HMM   |   Both   |   N/A   |N/A|HMM|Closeness|``UCTB.model.HMM``|
|   XGBoost   |   Both   |   N/A   |N/A|XGBoost|Closeness|``UCTB.model.XGBoost``|
|   DeepST [[SIGSPATIAL 2016]](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/09/DeepST-SIGSPATIAL2016.pdf)  |   Grid   |   CNN   |N/A|CNN|Closeness,Period,Trend|``UCTB.model.DeepST``|
|   ST-ResNet [[AAAI 2017]](https://arxiv.org/pdf/1610.00081.pdf)  |   Grid   |   CNN   |N/A|CNN|Closeness,Period,Trend|``UCTB.model.ST_ResNet``|
|   DCRNN  [[ICLR 2018]](https://arxiv.org/pdf/1707.01926.pdf) |   Node   |   GNN   |**Prior**(Sensor Network)|RNN|Closeness|``UCTB.model.DCRNN``|
|   GeoMAN  [[IJCAI 2018]](https://www.ijcai.org/proceedings/2018/0476.pdf) |   Node   |   Attention   |**Prior**(Sensor Networks)|Attention+LSTM|Closeness|``UCTB.model.GeoMAN``|
|   STGCN  [[IJCAI 2018]](https://www.ijcai.org/proceedings/2018/0505.pdf) |   Node   |   GNN   |**Prior**(Traffic Network)|Gated CNN|Closeness|``UCTB.model.STGCN``|
|   GraphWaveNet [[IJCAI 2019]](https://www.ijcai.org/proceedings/2019/0264.pdf)  |   Node   |   GNN   |**Adaptive**|TCN|Closeness|``UCTB.model.GraphWaveNet``|
|   ASTGCN  [[AAAI 2019]](https://ojs.aaai.org/index.php/AAAI/article/view/3881) |   Node   |   GNN+Attention   |**Prior**(Traffic Network)|Attention|Closeness,Period,Trend|``UCTB.model.ASTGCN``|
|   ST-MGCN   [[AAAI 2019]](https://ojs.aaai.org/index.php/AAAI/article/view/4247) |   Node   |   GNN   |**Prior**(Neighborhood,Functional similarity,Transportation connectivity)|CGRNN|Closeness|``UCTB.model.ST_MGCN``|
|   GMAN  [[AAAI 2020]](https://ojs.aaai.org/index.php/AAAI/article/view/5477/5333) |   Node   |   Attention   |**Prior**(Road Network)|Attention|Closeness|``UCTB.model.GMAN``|
|   STSGCN  [[AAAI 2020]](https://ojs.aaai.org/index.php/AAAI/article/view/5438) |   Node   |   GNN+Attention   |**Prior**(Spatial Network)|Attention|Closeness|``UCTB.model.STSGCN``|
|   AGCRN [[NeurIPS 2020]](https://proceedings.neurips.cc/paper/2020/file/ce1aad92b939420fc17005e5461e6f48-Paper.pdf) |   Node   |   GNN   |**Adaptive**|RNN|Closeness|``UCTB.model.AGCRN``|
|   STMeta [[TKDE 2021]](https://arxiv.org/abs/2009.09379)  |   Node   |   GNN   |**Prior**(Proximity,Functionality,Interaction/Same-line)|LSTM/RNN|Closeness,Period,Trend|``UCTB.model.STMeta``|

------

## Visualization Tool

The Visualization tool integrates visualization, error localization, and error diagnosis. Specifically, it allows data to be uploaded and provides interactive visual charts to show model errors, combined with spatiotemporal knowledge for error diagnosis.

Welcome to visit the [website](http://39.107.116.221/) for a trial! 

## Installation

UCTB toolbox may not work successfully with the upgrade of some packages. We thus encourage you to use the specific version of packages to avoid unseen errors. ***To avoid potential conflict, we highly recommend you install UCTB vis Anaconda.*** The installation details are in our [documents](https://uctb.github.io/UCTB/md_file/installation.html). 
