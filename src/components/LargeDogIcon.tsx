import React, { CSSProperties } from 'react';

type LargeDogIconProps = {
  isActive: boolean;
  isHovered: boolean;
}
const LargeDogIcon = ({ isActive, isHovered }: LargeDogIconProps) => {

  const color = "#FBCA6B";
  const hoverColor = "#7BDBFF";

  const svgStyles: CSSProperties = {
    width: '100%',
    transition: 'stroke 0.3s',
  };

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px"
      viewBox="0 0 1024 1024"
      enableBackground="new 0 0 1024 1024"
      xmlSpace="preserve"
      style={svgStyles}
      >
        <path fill={isActive || isHovered ? hoverColor : color} opacity="1.000000" stroke="none"
          d="
        M817.536377,807.581482
          C818.835083,812.816467 820.375488,817.602844 821.133118,822.510132
          C822.056824,828.493347 820.211792,830.322083 814.267517,830.329285
          C794.768921,830.352844 775.270264,830.364136 755.771667,830.352966
          C753.981323,830.351929 752.094971,830.691650 750.233215,829.313965
          C750.625793,818.150146 755.243286,809.129272 764.603455,802.925537
          C768.606689,800.272217 770.186279,797.181213 769.669250,792.550781
          C767.399475,772.222351 765.126770,751.921265 757.815674,732.569946
          C752.132385,717.527100 742.759033,705.500427 728.975769,697.266479
          C712.043762,687.151367 696.018372,675.860962 681.345154,662.670959
          C680.891174,662.262878 680.401428,661.894470 679.032471,660.774841
          C683.486755,675.104065 689.416382,687.472107 696.725525,699.212097
          C704.499817,711.698975 713.690491,723.133057 723.274353,734.233032
          C725.844421,737.209717 726.203552,739.636475 724.752747,743.158020
          C715.669006,765.206543 705.317322,786.645996 694.186707,807.720215
          C690.918091,813.908813 687.684937,820.116089 685.348389,826.730652
          C684.462891,829.237671 683.037476,830.401611 680.212585,830.389343
          C658.714539,830.295898 637.215942,830.342590 615.717468,830.311768
          C614.589355,830.310120 613.461670,830.000916 611.768311,829.751648
          C613.437500,817.617188 618.996704,808.388733 629.389648,802.204895
          C633.140137,799.973328 637.320435,798.766052 641.483276,797.562317
          C646.110840,796.224121 650.010010,793.727661 652.929443,789.915588
          C660.552185,779.962219 667.116882,769.375854 672.125000,757.834778
          C676.910583,746.806519 675.116760,737.252808 666.805237,728.505615
          C656.877258,718.057312 645.722290,709.080322 634.103821,700.703796
          C603.483154,678.627625 586.191956,648.689575 580.684448,611.625244
          C578.491455,596.867126 573.200317,583.655334 561.539124,573.719910
          C550.019714,563.905273 536.814392,563.091492 522.958313,567.143005
          C511.180695,570.586731 500.941681,577.375000 490.161682,582.953186
          C474.626495,590.992004 459.205963,599.275146 442.652161,605.082520
          C437.304840,606.958435 434.698425,610.637451 433.393433,615.840271
          C428.581909,635.023621 424.653381,654.394348 421.433441,673.894592
          C418.837616,689.614868 416.495911,705.390320 414.597137,721.208008
          C413.288788,732.107300 412.940857,743.121704 413.311401,754.124512
          C413.658264,764.424011 410.793854,773.485901 403.311432,780.880249
          C398.049866,786.079834 395.398193,792.685059 393.403198,799.660217
          C390.883179,808.471191 388.374634,817.283386 381.810303,824.245422
          C377.958679,828.330505 373.766418,830.575256 367.821899,830.504333
          C343.493622,830.214294 319.160095,830.365112 294.828522,830.336548
          C293.189270,830.334656 291.550171,830.191711 289.963837,830.116882
          C288.729797,817.065552 297.404083,800.076477 308.736755,796.989685
          C324.706390,792.639771 331.035645,781.601501 334.043732,766.939514
          C338.266327,746.358154 338.173035,725.716309 336.240387,704.880615
          C333.918976,679.854065 325.727386,656.194824 320.301880,631.895691
          C316.520752,614.960999 314.580475,597.783875 314.057739,580.497314
          C313.815094,572.471497 310.415039,566.540161 305.135864,561.153748
          C290.684235,546.408447 280.645386,529.261230 276.761505,508.794983
          C273.303680,490.573761 274.369232,472.387482 277.184845,454.202332
          C278.454590,446.001434 279.879761,437.793915 280.514160,429.534058
          C281.147949,421.281860 279.263458,413.189728 275.528931,405.851959
          C268.386566,391.818298 266.160980,376.824738 265.849762,361.386475
          C265.668396,352.390259 265.538757,343.381897 265.807190,334.391602
          C265.992065,328.198486 263.176544,324.334106 257.937653,321.717377
          C254.039200,319.770172 249.912231,318.425842 245.713623,317.414825
          C233.025803,314.359650 222.563980,308.234283 215.899353,296.593384
          C213.625244,292.621277 209.608765,290.755371 205.908783,288.531677
          C196.830826,283.075775 188.765213,276.532898 186.420914,265.620819
          C184.805878,258.103302 182.609558,251.127579 178.855682,244.269714
          C173.292282,234.106110 178.131851,223.235657 188.950455,219.055649
          C196.137268,216.278885 203.597366,216.241013 211.115402,217.215195
          C218.298370,218.145966 225.396011,217.887741 232.362946,215.748901
          C240.763046,213.170105 247.603302,208.269974 250.716156,200.030090
          C255.232162,188.075958 263.052032,181.652374 275.983643,181.064667
          C282.642395,180.762054 288.993530,178.479599 295.199951,175.960571
          C304.330963,172.254486 313.640381,170.367752 323.408905,173.580154
          C328.821747,175.360214 334.229858,174.409119 339.656586,173.262619
          C348.493774,171.395584 356.573364,172.897675 363.244415,179.418091
          C375.514679,191.411270 387.867126,203.324448 399.935669,215.518066
          C405.561096,221.201797 407.468750,228.031143 403.392548,235.575287
          C402.317261,237.565338 402.497467,239.314468 403.361969,241.260101
          C409.808319,255.767853 414.229523,270.986023 417.728027,286.376587
          C425.661560,321.277710 446.750336,346.097321 476.369507,364.440674
          C506.651001,383.194275 540.361389,392.898193 574.746704,400.639374
          C604.560242,407.351288 635.002991,410.919098 664.614929,418.643921
          C676.037048,421.623627 687.007629,426.327515 698.715820,428.124115
          C707.288452,429.439514 715.992249,429.944977 724.157532,425.820129
          C736.563660,419.552887 741.430176,404.713379 732.471069,394.284424
          C710.504883,368.714294 689.575012,341.587463 656.339111,328.971619
          C651.941650,327.302399 647.163635,326.195068 643.141907,322.570801
          C649.514587,318.812256 656.322327,317.958130 662.921753,316.894836
          C709.620422,309.370667 760.208862,335.704895 780.787842,378.274475
          C790.263733,397.876373 793.001099,418.326843 785.976318,439.287628
          C779.842041,457.591400 767.062500,469.490662 748.701294,475.400879
          C737.185852,479.107544 735.598145,481.704956 739.836853,493.220062
          C750.161133,521.267761 753.734924,550.264404 753.237549,579.969971
          C752.908997,599.594360 752.553162,619.225464 757.815735,638.468384
          C763.553833,659.449646 774.256531,677.707336 790.133606,692.135681
          C799.060181,700.247620 800.161194,709.711365 801.297363,720.090027
          C804.445923,748.852112 809.355957,777.299500 817.015320,805.234253
          C817.190979,805.874817 817.294128,806.535278 817.536377,807.581482
        M749.238892,357.264496
          C731.768982,341.006683 701.779480,327.855560 687.089355,330.294586
          C703.885681,341.058929 715.721130,356.762909 730.439087,370.815002
          C730.428589,365.284760 727.824829,361.589874 727.061646,357.186829
          C730.744568,358.895599 730.796143,358.852203 733.222839,361.735138
          C742.279114,372.494049 747.555786,385.040344 749.162292,398.854736
          C751.386780,417.982819 742.893250,431.299194 726.044861,436.403412
          C718.312622,438.745911 710.399780,439.131287 702.346069,438.677734
          C691.820496,438.085022 681.632629,435.811066 671.462463,433.307831
          C637.557861,424.962616 602.753479,421.245758 568.762573,413.340851
          C534.121826,405.284668 500.122223,395.500610 469.547333,376.506287
          C436.969971,356.267944 413.702667,329.021881 404.760590,290.848602
          C402.333435,280.487213 399.494659,270.201996 395.635040,260.254303
          C391.830597,250.448837 386.697479,248.540558 377.484222,253.443375
          C370.859589,256.968658 364.278809,260.588287 356.710571,261.687500
          C350.253601,262.625336 344.791290,265.716766 339.524414,269.315674
          C335.668488,271.950470 331.720947,274.369965 327.101532,275.571594
          C316.878906,278.230804 307.606781,273.150146 305.129181,262.913666
          C303.882935,257.764648 303.603973,252.437897 304.081451,247.040909
          C304.997803,236.682449 309.399658,227.532852 313.341888,218.191360
          C317.027496,209.457947 321.217438,200.868500 322.647095,191.383957
          C323.430573,186.186096 322.061707,184.822479 316.907623,184.255737
          C309.900299,183.485229 303.393707,185.241302 296.986664,187.859848
          C290.202820,190.632385 283.332001,193.270477 275.878571,193.485062
          C268.368683,193.701248 264.215668,197.734344 261.555511,204.498383
          C256.819244,216.541428 247.311600,223.458984 235.297867,227.234528
          C225.654922,230.264984 215.763824,230.604355 204.459213,228.812012
          C208.090607,235.017120 205.199203,239.176895 202.382690,243.391281
          C201.845352,244.195328 201.561127,245.202515 201.304031,246.154816
          C196.378540,264.399445 212.882065,286.660797 236.024918,285.173737
          C242.822021,284.737030 248.885483,281.912933 254.952698,279.164673
          C270.789520,271.991058 284.514191,276.693176 297.053223,286.915009
          C300.399689,289.643066 303.610596,293.569183 301.323792,298.151733
          C298.883575,303.041748 294.345093,300.089661 290.615967,299.495331
          C286.627228,298.859619 283.002960,296.375122 278.698517,296.847046
          C277.985382,300.314056 280.577332,301.527435 282.398346,302.988800
          C286.710754,306.449463 291.690033,308.816132 296.646210,311.215485
          C298.186768,311.961304 300.499817,312.663452 299.841034,315.017120
          C299.268158,317.063690 297.103912,317.171051 295.268677,317.319977
          C294.107941,317.414185 292.930664,317.316010 291.772247,317.425385
          C284.320007,318.128998 277.257111,315.650909 269.301910,314.250397
          C275.649628,321.083008 278.979492,328.390808 279.292877,336.877869
          C279.735504,348.864502 279.740356,360.872284 280.416168,372.843750
          C280.964661,382.559631 283.414246,391.894226 288.463531,401.945587
          C288.420776,391.970154 287.129791,383.452545 288.013062,374.821808
          C290.688416,375.189026 291.013153,377.042419 291.649231,378.451599
          C295.434601,386.837494 297.796021,395.646881 299.370605,404.697205
          C302.324097,421.673065 302.141296,438.811035 302.411346,455.951233
          C302.589142,467.235657 306.158600,477.686279 312.323334,487.219940
          C312.598236,486.197235 312.649750,485.218964 312.407440,484.319855
          C307.242584,465.155304 308.642303,446.183868 313.678894,427.213257
          C318.145966,410.387787 324.483917,393.959442 324.977386,376.242523
          C324.999359,375.455231 325.360413,374.604126 326.899780,374.655457
          C330.433594,380.999817 329.569275,388.002380 328.884003,394.860931
          C327.740265,406.307678 324.043213,417.256927 321.878906,428.507050
          C319.985046,438.351379 318.528778,448.298553 323.054840,457.891327
          C326.603088,465.411591 333.652222,467.163055 340.481110,462.394135
          C343.252228,460.458893 345.381561,457.911072 347.382111,455.224182
          C348.218353,454.101013 348.672516,452.401123 350.616669,452.602142
          C352.137573,460.390686 345.447968,473.259979 337.573059,477.808960
          C332.507629,480.734955 327.509705,480.757690 322.479736,477.694397
          C319.467133,475.859741 317.300781,473.038177 313.741425,469.631653
          C318.432892,492.728333 330.758026,511.196625 338.860535,531.526062
          C336.993103,531.783325 336.502838,531.016724 336.053925,530.361633
          C328.756439,519.712952 319.874359,510.477600 310.575195,501.599487
          C302.223694,493.626160 296.291748,484.097168 292.584381,473.165741
          C291.844421,470.983917 290.965302,468.849274 290.150330,466.692871
          C287.626282,479.763885 287.714386,492.524323 289.794678,505.247559
          C293.052429,525.171997 301.104401,543.098206 312.740906,559.482422
          C319.093536,568.426819 323.842651,578.023010 325.397400,589.022766
          C328.630890,611.899170 333.327209,634.461365 338.987030,656.875671
          C346.664154,687.278931 352.327667,717.946289 347.405762,749.585876
          C343.742249,773.136108 337.717194,795.115601 313.811981,806.683411
          C313.480652,806.843689 313.319611,807.355835 313.052277,807.742493
          C314.286591,808.297729 315.349792,806.551636 316.390442,807.818115
          C317.232697,809.479431 314.593475,810.663269 315.743530,812.416748
          C324.705017,800.870605 326.420990,798.891846 337.219696,795.495605
          C346.194214,792.673157 350.762604,786.774658 353.608643,778.318665
          C361.430176,755.079834 364.420746,731.033997 365.534973,706.751404
          C366.229401,691.617798 365.723511,676.426025 365.647339,661.260864
          C365.533722,638.641113 359.898956,617.629089 348.289764,598.035767
          C337.288788,579.468872 324.084412,562.549194 311.083771,545.442261
          C309.874817,543.851440 308.081085,542.440979 308.099884,539.137817
          C327.244202,550.447388 342.578033,565.260864 358.558838,580.618774
          C359.526489,569.679688 356.850586,560.163147 356.288116,550.323608
          C359.642303,550.691711 361.016571,552.882690 362.526398,554.794861
          C367.777924,561.445984 371.038971,569.102905 373.241058,577.187622
          C378.033020,594.780273 379.982758,612.808899 380.220367,630.962769
          C380.595093,659.590576 380.883362,688.227783 377.402710,716.752808
          C374.920898,737.091736 371.419403,757.174438 364.493652,776.533630
          C359.473969,790.564880 351.708588,802.081421 336.882019,807.463257
          C332.335785,809.113464 329.266724,812.749573 327.237000,817.152588
          C324.139191,823.872742 324.662048,824.666748 332.113800,824.674683
          C333.280426,824.675903 334.457672,824.569641 335.611786,824.689087
          C339.557922,825.097412 341.547760,824.093506 341.886658,819.419678
          C342.442474,811.755188 349.498413,806.561462 357.216461,807.654663
          C356.246002,811.453491 353.738129,814.733704 353.914734,818.889954
          C354.089722,823.008850 355.325623,824.198242 359.415131,822.964905
          C368.955566,820.087524 374.310486,813.187012 377.502686,804.379883
          C380.164917,797.035034 382.243225,789.478638 384.586426,782.017944
          C385.593811,778.810425 386.849243,775.789612 389.607208,773.574097
          C396.327484,768.175842 399.323639,761.113464 398.882996,752.509644
          C398.352905,742.159607 399.451843,731.861267 400.893707,721.675171
          C406.156311,684.498169 412.594299,647.523804 421.305908,610.974548
          C421.692780,609.351501 422.783783,607.509766 420.758270,605.752625
          C416.251373,608.493347 412.216461,612.075378 406.895813,613.336304
          C400.096649,614.947571 395.313904,614.034790 391.838470,609.877014
          C396.750275,608.027466 401.521545,606.151489 405.656403,602.986694
          C415.900146,595.146179 422.506073,584.631897 427.585480,573.075684
          C435.798706,554.389526 440.054199,534.516907 444.723175,514.769348
          C445.804474,510.195984 445.809082,505.304382 448.655273,501.138092
          C454.158295,532.685730 447.298096,562.684021 436.286713,592.119019
          C438.822723,592.775696 440.095398,591.791199 441.446228,591.260742
          C459.643677,584.114502 476.536041,574.348755 493.770630,565.256226
          C514.832214,554.144592 535.792603,542.726807 559.921143,539.393188
          C587.987000,535.515564 611.230225,543.267395 628.018066,567.125244
          C634.188232,575.893921 638.907288,585.438843 643.667480,594.980103
          C644.782959,597.216125 645.910828,599.448669 647.122986,601.632935
          C648.238403,603.643005 649.474854,605.585938 650.657959,607.558472
          C648.760193,591.616150 646.439331,576.051086 649.226746,560.291748
          C649.978027,560.869385 650.216064,561.480957 650.271240,562.108704
          C652.456970,586.942810 660.352173,609.828674 673.663513,630.879944
          C689.118835,655.321716 710.926697,672.822754 735.464783,687.282043
          C751.533142,696.750488 762.376892,710.304138 768.364929,727.908264
          C776.135803,750.753296 778.848572,774.504089 781.340332,798.320312
          C781.922974,803.890015 780.265198,807.119873 774.832275,809.399597
          C768.736023,811.957581 763.732483,816.186523 764.131409,823.889709
          C765.515869,824.897156 766.892151,824.756348 768.190247,824.674805
          C771.651428,824.457275 775.532043,825.829468 778.462341,823.894226
          C780.763367,822.374573 780.049011,818.695312 781.042480,816.083069
          C783.343994,810.031494 789.375000,806.745728 794.500854,808.839539
          C794.700012,810.656433 793.064331,811.830566 792.786743,813.403198
          C792.139221,817.071777 790.295044,821.666748 793.784607,824.044678
          C796.547180,825.927246 801.114807,825.568420 804.388184,823.998718
          C806.901794,822.793396 806.718445,819.444702 806.621155,816.757263
          C806.579529,815.607300 806.315430,814.457458 806.076416,813.323608
          C801.758850,792.841492 796.474060,772.548706 793.312561,751.844421
          C792.080933,743.778442 789.373962,737.645813 782.508057,732.373535
          C773.631165,725.556885 768.790344,715.616394 767.814453,704.001099
          C773.731323,710.336670 778.646912,717.725098 787.488037,721.226746
          C788.158875,713.167603 787.649841,706.598450 781.673279,700.582520
          C767.351379,686.166199 755.790588,669.697388 748.622253,650.461060
          C741.418945,631.130981 739.945557,610.946838 739.718750,590.566956
          C739.518860,572.608032 740.574280,554.623718 737.732849,536.731689
          C732.747437,505.338348 720.814270,477.648315 696.204163,456.441742
          C694.767761,455.204010 692.863586,454.172272 692.655884,451.823456
          C694.782471,451.150085 696.609314,452.018066 698.497253,452.584167
          C706.941589,455.116211 715.323730,457.901794 723.864624,460.055267
          C739.922546,464.104034 754.463623,461.488922 765.587524,448.310394
          C775.667419,436.368774 778.294617,422.087006 776.161316,407.005402
          C773.395996,387.455963 763.777527,371.369415 749.238892,357.264496
        M637.760437,687.721069
          C646.485107,694.961304 654.832764,702.630432 662.816589,710.662537
          C669.499817,717.386169 676.163147,724.172363 681.026611,732.470337
          C686.210144,741.314392 687.628723,750.324951 683.767090,760.141113
          C678.726440,772.953979 671.758850,784.611633 663.855042,795.810547
          C659.050964,802.617371 653.032043,807.376221 644.833008,809.424927
          C641.141602,810.347290 637.464172,811.661865 634.370483,814.023560
          C631.087524,816.529846 627.934265,819.207520 627.589417,823.787720
          C635.587769,826.309570 637.808167,825.399902 640.784363,818.577637
          C643.515076,812.318054 649.643799,808.930542 655.518127,810.648010
          C654.378479,814.121033 651.096375,816.518494 650.642334,820.290955
          C650.418457,822.151367 649.915955,823.899780 652.534119,824.615295
          C661.450684,827.051636 669.677429,824.123596 675.247070,816.564026
          C685.589661,802.525940 692.932861,786.821533 700.675049,771.324402
          C702.260925,768.150024 702.534546,766.229126 698.901001,764.185059
          C695.246460,762.129089 692.618958,758.860535 694.302124,753.708008
          C695.798096,754.344055 696.971802,755.178223 698.218750,755.307861
          C701.428467,755.641479 704.881348,756.925598 707.652527,754.065430
          C712.722839,748.832336 713.255371,741.504333 708.776978,735.916992
          C694.243042,717.784363 680.803345,698.847534 671.841187,677.349731
          C666.237732,663.908569 657.123169,654.820801 644.736572,647.978455
          C627.253113,638.320374 609.597595,628.859070 594.512573,615.462708
          C594.390259,615.354065 593.971008,615.579773 593.384583,615.725281
          C594.356873,619.729614 595.216614,623.769226 596.321655,627.740662
          C603.142334,652.252686 617.617065,671.523315 637.760437,687.721069
        M346.312042,184.539520
          C342.544281,184.261688 341.048706,186.829803 339.911987,189.743210
          C338.218842,194.082672 336.810974,198.544586 334.920471,202.793686
          C330.320007,213.133514 325.537354,223.392731 320.778442,233.661423
          C317.425110,240.897247 315.672089,248.442337 316.417694,256.427765
          C317.073456,263.450775 321.693329,265.843323 327.990936,262.561066
          C331.449463,260.758484 334.188141,258.110046 336.680664,255.159470
          C342.745087,247.980606 347.248962,239.827454 351.550568,231.539581
          C352.428986,229.847168 352.794281,227.736511 355.457092,226.618454
          C357.363586,233.214493 355.124176,240.137329 357.265320,247.418900
          C366.847626,242.145767 375.790985,237.422241 384.532410,232.350555
          C391.388245,228.372849 391.710297,225.714951 386.061554,219.959351
          C376.381348,210.096024 366.512939,200.416885 356.686157,190.698212
          C353.936279,187.978561 350.824554,185.766373 346.312042,184.539520
        z"/>
        <path fill={isActive || isHovered ? hoverColor : color} opacity="1.000000" stroke="none"
          d="
        M382.360779,356.299316
          C387.833191,352.570374 392.649078,348.418274 398.808624,346.393982
          C400.078064,348.761078 398.301483,350.021393 397.443604,351.470703
          C390.338043,363.474609 381.045898,373.716400 370.960968,383.187531
          C356.309174,396.947540 345.182526,413.148102 336.341461,431.057709
          C335.994263,431.761017 335.457550,432.370758 334.274902,434.093903
          C333.092773,425.960724 333.588257,419.072327 335.101837,412.180695
          C337.201874,402.618713 341.260040,393.896942 346.704956,385.851593
          C355.969574,372.162231 360.532104,357.224304 359.455109,340.649323
          C359.417206,340.066315 359.724152,339.460938 360.122375,337.840607
          C367.556274,346.657074 366.604767,356.983490 368.796753,367.133759
          C373.393036,363.463562 377.737061,359.994781 382.360779,356.299316
        z"/>
        <path fill={isActive || isHovered ? hoverColor : color} opacity="1.000000" stroke="none"
          d="
        M307.242340,370.526794
          C305.179871,371.591858 305.139496,371.589050 305.263458,369.810547
          C305.980072,359.529633 307.537354,349.383179 309.683228,339.294769
          C315.605408,311.452301 331.821045,289.818665 351.096039,269.990784
          C351.402527,269.675537 351.972473,269.616364 353.037415,269.190674
          C347.175385,288.407135 334.946045,303.866364 325.899231,322.048889
          C333.150391,321.073578 339.551971,320.015015 346.969391,323.869659
          C325.338776,332.865723 311.615479,347.685272 307.242340,370.526794
        z"/>
        <path fill={isActive || isHovered ? hoverColor : color} opacity="1.000000" stroke="none"
          d="
        M296.526489,222.594391
          C293.328064,225.953140 288.955109,225.175476 285.061859,225.882004
          C276.172119,227.495285 267.266235,227.945816 258.491669,222.509613
          C262.969574,217.499542 264.047546,211.154999 266.751099,205.546005
          C270.578278,197.605759 278.160828,197.186920 282.975830,204.536880
          C287.048157,210.753159 289.765594,217.975540 296.526489,222.594391
        z"/>
    </svg>
  );
};

export default LargeDogIcon;