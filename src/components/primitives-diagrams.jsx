import React, {Component} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import {OrgDiagram, FamDiagram} from 'https://esm.sh/basicprimitivesreact';
import {
    AnnotationType,
    Colors,
    ZOrderType,
    Enabled,
    OrientationType,
    PageFitMode,
    GroupByType,
    LineType
} from 'https://esm.sh/basicprimitives';

const HeadDiagram = () => (
    // <head>
    //     <meta charset="utf-8"/>
    //     <meta name="viewport" content="width=device-width, initial-scale=1"/>
    //     <meta name="description" content="A portfolio website using fresh and deno"/>
    //     <title>Fresh Portfolio</title>
    //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"/>
        <style>
            {globalCssDiagram}
        </style>
    // </head>
);

class PrimitivesDiagrams  extends Component {
    render() {
        const config = {
            items: [
                {id: 1, title: "Design", label: "Design", et: 80, lt: 100, itemTitleColor: "#4b0082"},
                {
                    id: 2,
                    parents: [1],
                    title: "Aerodynamics",
                    label: "Aerodynamics",
                    et: 30,
                    lt: 45,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 3,
                    parents: [1],
                    title: "Structure",
                    label: "Structure",
                    et: 35,
                    lt: 55,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 4,
                    parents: [2],
                    title: "Propulsion",
                    label: "Propulsion",
                    et: 50,
                    lt: 65,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 5,
                    parents: [3],
                    title: "Control & Stability",
                    label: "Control & Stability",
                    et: 40,
                    lt: 50,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 6,
                    parents: [1, 4, 5],
                    title: "Build & Test Model",
                    label: "Build & Test Model",
                    et: 50,
                    lt: 70,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 7,
                    parents: [6],
                    title: "Computation",
                    label: "Computation",
                    et: 20,
                    lt: 30,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 8,
                    parents: [6],
                    title: "Wind Tunnel",
                    label: "Wind Tunnel",
                    et: 20,
                    lt: 30,
                    itemTitleColor: "#4b0082"
                },
                {id: 9, parents: [7, 8], title: "Review", label: "Review", et: 45, lt: 55, itemTitleColor: "#4b0082"},
                {
                    id: 10,
                    parents: [6, 9],
                    title: "Build Prototype",
                    label: "Build Prototype",
                    et: 60,
                    lt: 80,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 11,
                    parents: [9],
                    title: "Research flights",
                    label: "Research flights",
                    et: 50,
                    lt: 60,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 12,
                    parents: [10],
                    title: "Finalize",
                    label: "Finalize",
                    et: 20,
                    lt: 30,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 13,
                    parents: [7],
                    title: "Flight Simulation",
                    label: "Flight Simulation",
                    et: 30,
                    lt: 45,
                    itemTitleColor: "#4b0082"
                },
                {
                    id: 14,
                    parents: [13],
                    title: "Revise & Review",
                    label: "Revise & Review",
                    et: 45,
                    lt: 55,
                    itemTitleColor: "#4b0082"
                }
            ],
            annotations: [
                {
                    annotationType: AnnotationType.HighlightPath,
                    items: [1, 3, 5, 6, 8, 9, 10, 12],
                    color: Colors.Red,
                    lineWidth: 2,
                    zOrderType: ZOrderType.Foreground,
                    opacity: 0.5
                }
            ],
            templates: [{
                name: "pertTemplate",
                itemSize: {width: 100, height: 60},
                minimizedItemSize: {width: 3, height: 3},
                highlightPadding: {left: 2, top: 2, right: 2, bottom: 2},
                onItemRender: ({context: itemConfig}) => {
                    const {title, itemTitleColor, et, lt} = itemConfig;
                    const backgroundColor = itemTitleColor != null ? itemTitleColor : Colors.RoyalBlue;
                    return <div className="PERTTemplate">
                        <div className="PERTTitleBackground" style={{backgroundColor}}>
                            <div className="PERTTitle">{title}</div>
                        </div>
                        <div className="PERTHorizontalLine"/>
                        <div className="PERTVerticalLine"/>
                        <div className="PERTETTitle">ET</div>
                        <div className="PERTLTTitle">LT</div>
                        <div className="PERTET">{et}</div>
                        <div className="PERTLT">{lt}</div>
                    </div>;
                }
            }],
            cursorItem: 0,
            linesWidth: 2,
            linesColor: "gray",
            lineItemsInterval: 5,
            hasSelectorCheckbox: Enabled.True,
            orientationType: OrientationType.Left,
            pageFitMode: PageFitMode.AutoSize,
            defaultTemplateName: "pertTemplate",
            arrowsDirection: GroupByType.Children,
            highlightLinesColor: Colors.Navy,
            highlightLinesWidth: 2,
            highlightLinesType: LineType.Solid
        };

        return <div>
            <HeadDiagram/>
            <div className="placeholder">
                <FamDiagram centerOnCursor={true} config={config}/>
            </div>
        </div>
    }
}

const globalCssDiagram = `.container {
    padding: 10px; }

.placeholder {
    position: relative;
    overflow: auto;
    width: 100%;
    height: 480px;
    border-width: 1px;
    border-style: dotted; }

.StyledButton {
    width: 32px;
    height: 32px;
    margin-bottom: 3px;
    padding: 0px;
}

.mediaPlaceholder {
    width: 100%;
    height: 350px;
    border-width: 1px;
    border-style: dotted; }

@media screen and (min-height: 600px) {
    .mediaPlaceholder {
        height: 350px; } }

@media screen and (min-height: 700px) {
    .mediaPlaceholder {
        height: 450px; } }

@media screen and (min-height: 800px) {
    .mediaPlaceholder {
        height: 550px; } }

@media screen and (min-height: 900px) {
    .mediaPlaceholder {
        height: 650px; } }

@media screen and (min-height: 1000px) {
    .mediaPlaceholder {
        height: 750px; } }

@media screen and (min-height: 1100px) {
    .mediaPlaceholder {
        height: 850px; } }

@media screen and (min-height: 1200px) {
    .mediaPlaceholder {
        height: 950px; } }

@media screen and (min-height: 1300px) {
    .mediaPlaceholder {
        height: 1050px; } }

@media screen and (min-height: 1400px) {
    .mediaPlaceholder {
        height: 1150px; } }

@media screen and (min-height: 1500px) {
    .mediaPlaceholder {
        height: 1250px; } }

.TemplateItem, .InfoTemplate, .CursorFrame, .CursorBadge, .HighlightFrame, .HighlightBadgePlaceholder, .HighlightBadge, .DepartmentTemplate, .DepartmentTemplate .DepartmentTitleBackground, .DepartmentTemplate .DepartmentTitleBackground .DepartmentTitle, .ContactTemplate, .ContactTemplate .ContactTitleBackground, .ContactTemplate .ContactTitleBackground .ContactTitle, .ContactTemplate .ContactPhotoFrame, .ContactTemplate .ContactPhone, .ContactTemplate .ContactEmail, .ContactTemplate .ContactDescription, .ContactTemplate .ContactLabel, .ContactTemplate .ContactCheckboxElement, .ContactTemplate .ContactCheckboxElement .ContactCheckboxCaption, .PERTTemplate, .PERTTemplate .PERTTitleBackground, .PERTTemplate .PERTTitleBackground .PERTTitle, .PERTTemplate .PERTETTitle, .PERTTemplate .PERTLTTitle, .PERTTemplate .PERTET, .PERTTemplate .PERTLT, .PERTTemplate .PERTVerticalLine, .PERTTemplate .PERTHorizontalLine, .xlTemplate, .xlTemplate .xlTitleBackground, .xlTemplate .xlTitleBackground .xlTitle, .xlTemplate .xlPhotoFrame, .xlTemplate .xlPhone, .xlTemplate .xlEmail, .xlTemplate .xlDescription, .lgTemplate, .lgTemplate .lgTitleBackground, .lgTemplate .lgTitleBackground .lgTitle, .lgTemplate .lgPhotoFrame, .lgTemplate .lgEmail, .lgTemplate .lgDescription, .mdTemplate, .mdTemplate .mdPhotoFrame, .mdTemplate .mdTitle, .mdTemplate .mdDescription, .smTemplate, .smTemplate .smTitle, .smTemplate .smDescription, .xsTemplate, .xsTemplate .xsTitle {
    position: absolute;
    font-family: Trebuchet MS, Tahoma, Verdana, Arial, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: content-box; }

.TemplateCornerAll, .InfoTemplate, .CursorFrame, .HighlightFrame, .DepartmentTemplate, .DepartmentTemplate .DepartmentTitleBackground, .ContactTemplate, .ContactTemplate .ContactTitleBackground, .PERTTemplate, .PERTTemplate .PERTTitleBackground, .xlTemplate, .xlTemplate .xlTitleBackground, .lgTemplate, .lgTemplate .lgTitleBackground, .mdTemplate, .smTemplate, .xsTemplate {
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    -khtml-border-radius: 4px;
    border-radius: 4px; }

.TemplateItemFrame, .InfoTemplate, .DepartmentTemplate, .DepartmentTemplate .DepartmentTitleBackground, .ContactTemplate, .ContactTemplate .ContactTitleBackground, .PERTTemplate, .PERTTemplate .PERTTitleBackground, .xlTemplate, .xlTemplate .xlTitleBackground, .lgTemplate, .lgTemplate .lgTitleBackground, .mdTemplate, .smTemplate, .xsTemplate {
    border: 1px solid #dddddd;
    background: #eeeeee;
    color: #333333; }

.TemplateTitle, .DepartmentTemplate .DepartmentTitleBackground .DepartmentTitle, .ContactTemplate .ContactTitleBackground .ContactTitle, .PERTTemplate .PERTTitleBackground .PERTTitle, .xlTemplate .xlTitleBackground .xlTitle, .lgTemplate .lgTitleBackground .lgTitle {
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 16px;
    color: white;
    padding: 0; }

.TemplatePhotoFrame, .ContactTemplate .ContactPhotoFrame, .xlTemplate .xlPhotoFrame, .lgTemplate .lgPhotoFrame, .mdTemplate .mdPhotoFrame {
    border: 1px solid #cccccc;
    background: #f6f6f6;
    color: #1c94c4; }

.InfoTemplate {
    text-align: center;
    font-size: 14px;
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }

.BadgeSymbol {
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    -khtml-border-radius: 10px;
    border-radius: 10px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    font-weight: bold;
    font-family: Arial;
    padding: 0px;
    float: left;
    width: 20px;
    height: 20px;
    background-color: red;
    color: white; }

.CursorFrame {
    border: 2px solid #fbd850;
    background: #ffffff;
    color: #eb8f00;
    width: 100%;
    height: 100%;
    left: -2px;
    top: -2px; }

.CursorBadge {
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    -khtml-border-radius: 16px;
    border-radius: 16px;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    font-weight: bold;
    font-family: Arial;
    padding: 4px;
    float: left;
    width: 16px;
    height: 16px;
    top: 45px;
    left: 114px;
    z-index: 1000;
    background-color: green;
    color: white; }

.HighlightFrame {
    border: 2px solid #fbcb09;
    background: white;
    color: #c77405;
    width: 100%;
    height: 100%;
    left: -2px;
    top: -2px; }

.HighlightBadgePlaceholder {
    right: 0px;
    top: 45px; }

.HighlightBadge {
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    -khtml-border-radius: 16px;
    border-radius: 16px;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    font-weight: bold;
    font-family: Arial;
    padding: 4px;
    float: left;
    width: 16px;
    height: 16px;
    top: 0px;
    left: -10px;
    z-index: 1000;
    background-color: green;
    color: white; }

.DepartmentTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.DepartmentTemplate .DepartmentTitleBackground {
    top: 2px;
    left: 2px;
    width: 196px;
    height: 25px; }
.DepartmentTemplate .DepartmentTitleBackground .DepartmentTitle {
    top: 3px;
    left: 3px;
    width: 188px;
    height: 23px;
    text-align: center; }

.ContactTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.ContactTemplate .ContactTitleBackground {
    top: 2px;
    left: 2px;
    right: 2px;
    height: 20px; }
.ContactTemplate .ContactTitleBackground .ContactTitle {
    top: 2px;
    left: 2px;
    right: 2px;
    height: 16px; }
.ContactTemplate .ContactPhotoFrame {
    top: 26px;
    left: 2px;
    width: 50px;
    height: 60px; }
.ContactTemplate .ContactPhotoFrame .ContactPhoto {
    height: 60px;
    width: 50px; }
.ContactTemplate .ContactPhone {
    overflow: hidden;
    top: 26px;
    left: 56px;
    height: 16px;
    bottom: 2px;
    font-size: 12px; }
.ContactTemplate .ContactEmail {
    overflow: hidden;
    top: 44px;
    left: 56px;
    height: 16px;
    bottom: 2px;
    font-size: 12px; }
.ContactTemplate .ContactDescription {
    overflow: hidden;
    top: 62px;
    left: 56px;
    right: 2px;
    bottom: 2px;
    font-size: 12px; }
.ContactTemplate .ContactLabel {
    text-align: center;
    top: -20px;
    left: 2px;
    right: 2px;
    height: 16px; }
.ContactTemplate .ContactCheckboxElement {
    overflow: hidden;
    height: 16x;
    left: 2px;
    right: 2px;
    bottom: 2px;
    font-size: 12px;
    z-index: 100; }
.ContactTemplate .ContactCheckboxElement .ContactCheckboxCaption {
    overflow: hidden;
    padding-bottom: 2px; }

.InLayoutLabel {
    text-align: center; }

.PERTTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.PERTTemplate .PERTTitleBackground {
    top: 2px;
    left: 2px;
    right: 2px;
    height: 20px; }
.PERTTemplate .PERTTitleBackground .PERTTitle {
    top: 2px;
    left: 2px;
    height: 18px;
    width: 88px; }
.PERTTemplate .PERTETTitle {
    overflow: hidden;
    top: 20px;
    left: 0px;
    width: 50px;
    height: 20px;
    padding: 4px;
    font-size: 12px; }
.PERTTemplate .PERTLTTitle {
    overflow: hidden;
    top: 20px;
    left: 50px;
    width: 50px;
    height: 20px;
    padding: 4px;
    font-size: 12px; }
.PERTTemplate .PERTET {
    overflow: hidden;
    top: 40px;
    left: 0px;
    width: 50px;
    height: 20px;
    padding: 4px;
    font-size: 12px; }
.PERTTemplate .PERTLT {
    overflow: hidden;
    top: 40px;
    left: 50px;
    width: 50px;
    height: 20px;
    padding: 4px;
    font-size: 12px; }
.PERTTemplate .PERTVerticalLine {
    line-height: 0px;
    border-left: 1px solid gray;
    top: 24px;
    left: 50px;
    width: 1px;
    height: 32px; }
.PERTTemplate .PERTHorizontalLine {
    line-height: 0px;
    border-top: 1px solid gray;
    top: 40px;
    left: 4px;
    width: 92px;
    height: 1px; }

.xlTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.xlTemplate .xlTitleBackground {
    top: 2px;
    left: 2px;
    right: 2px;
    height: 20px; }
.xlTemplate .xlTitleBackground .xlTitle {
    top: 2px;
    left: 2px;
    right: 2px;
    height: 16px; }
.xlTemplate .xlPhotoFrame {
    top: 26px;
    left: 2px;
    width: 50px;
    height: 60px; }
.xlTemplate .xlPhotoFrame .Photo {
    height: 60px;
    width: 50px; }
.xlTemplate .xlPhone {
    overflow: hidden;
    top: 26px;
    left: 56px;
    height: 16px;
    bottom: 2px;
    font-size: 12px; }
.xlTemplate .xlEmail {
    overflow: hidden;
    top: 44px;
    left: 56px;
    height: 16px;
    bottom: 2px;
    font-size: 12px; }
.xlTemplate .xlDescription {
    overflow: hidden;
    top: 62px;
    left: 56px;
    right: 2px;
    bottom: 2px;
    font-size: 12px; }

.lgTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.lgTemplate .lgTitleBackground {
    top: 2px;
    left: 2px;
    right: 2px;
    height: 18px; }
.lgTemplate .lgTitleBackground .lgTitle {
    top: 2px;
    left: 2px;
    width: 152px;
    height: 14px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis; }
.lgTemplate .lgPhotoFrame {
    top: 22px;
    left: 2px;
    width: 50px;
    height: 60px; }
.lgTemplate .lgPhotoFrame .lgPhoto {
    height: 60px;
    width: 50px; }
.lgTemplate .lgEmail {
    overflow: hidden;
    top: 22px;
    left: 56px;
    width: 98px;
    height: 13px;
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis; }
.lgTemplate .lgDescription {
    overflow: hidden;
    top: 37px;
    left: 56px;
    width: 98px;
    font-size: 11px; }

.mdTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.mdTemplate .mdPhotoFrame {
    top: 2px;
    left: 2px;
    width: 25px;
    height: 30px; }
.mdTemplate .mdPhotoFrame .mdPhoto {
    width: 25px;
    height: 30px; }
.mdTemplate .mdTitle {
    top: 2px;
    left: 31px;
    width: 98px;
    height: 14px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis; }
.mdTemplate .mdDescription {
    overflow: hidden;
    top: 18px;
    left: 31px;
    width: 98px;
    height: 25px;
    font-size: 11px; }

.smTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.smTemplate .smTitle {
    top: 2px;
    left: 2px;
    width: 98px;
    height: 14px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis; }
.smTemplate .smDescription {
    overflow: hidden;
    top: 18px;
    left: 2px;
    width: 98px;
    height: 12px;
    font-size: 10px; }

.xsTemplate {
    width: 100%;
    height: 100%;
    left: -1px;
    top: -1px; }
.xsTemplate .xsTitle {
    top: 2px;
    left: 2px;
    width: 80px;
    height: 14px;
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center; }`

export default PrimitivesDiagrams;
