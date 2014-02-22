jQuery(document).ready(function($){var esc_attr=esc_html=function(str){return String(str).replace(/"/g,"&quot;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;")};if(location.href.match(/page\=ws-plugin--s2member-pro-alipay-ops/)){$("select#ws-plugin--s2member-auto-eot-system-enabled").change(function(){var $this=$(this),val=$this.val();var $viaCron=$("p#ws-plugin--s2member-auto-eot-system-enabled-via-cron");if(val==2){$viaCron.show()}else{$viaCron.hide()}})}else{if(location.href.match(/page\=ws-plugin--s2member-pro-alipay-buttons/)){$("div.ws-menu-page input[id]").filter(function(){return this.id.match(/^ws-plugin--s2member-pro-(level[1-9][0-9]*|ccap)-ccaps$/)}).keyup(function(){var value=this.value.replace(/^(-all|-al|-a|-)[;,]*/gi,""),_all=(this.value.match(/^(-all|-al|-a|-)[;,]*/i))?"-all,":"";if(value.match(/[^a-z_0-9,]/)){this.value=_all+$.trim($.trim(value).replace(/[ \-]/g,"_").replace(/[^a-z_0-9,]/gi,"").toLowerCase())}});ws_plugin__s2member_pro_alipayButtonGenerate=function(button){var shortCodeTemplate='[s2Member-Pro-AliPay-Button %%attrs%% image="default" output="anchor" /]',shortCodeTemplateAttrs="",labels={};eval("<?php echo c_ws_plugin__s2member_utils_strings::esc_dq($vars['labels']); ?>");var shortCode=$("input#ws-plugin--s2member-pro-"+button+"-shortcode");var level=button.replace(/^level/,"");var label=labels["level"+level].replace(/"/g,"");var desc=$.trim($("input#ws-plugin--s2member-pro-"+button+"-desc").val().replace(/"/g,""));var regAmount=$("input#ws-plugin--s2member-pro-"+button+"-amount").val().replace(/[^0-9\.]/g,"");var regPeriod=$("select#ws-plugin--s2member-pro-"+button+"-term").val().split("-")[0].replace(/[^0-9]/g,"");var regTerm=$("select#ws-plugin--s2member-pro-"+button+"-term").val().split("-")[1].replace(/[^A-Z]/g,"");var cCaps=$.trim($.trim($("input#ws-plugin--s2member-pro-"+button+"-ccaps").val()).replace(/^(-all|-al|-a|-)[;,]*/gi,"").replace(/[ \-]/g,"_").replace(/[^a-z_0-9,]/gi,"").toLowerCase());cCaps=($.trim($("input#ws-plugin--s2member-pro-"+button+"-ccaps").val()).match(/^(-all|-al|-a|-)[;,]*/i))?((cCaps)?"-all,":"-all")+cCaps.toLowerCase():cCaps.toLowerCase();var levelCcapsPer=(regTerm!=="L")?level+":"+cCaps+":"+regPeriod+" "+regTerm:level+":"+cCaps;levelCcapsPer=levelCcapsPer.replace(/\:+$/g,"");if(!regAmount||isNaN(regAmount)||regAmount<0.01){alert("— Oops, a slight problem: —\n\nAmount must be >= 0.01");return false}else{if(regAmount>10000){alert("— Oops, a slight problem: —\n\nMaximum Amount is: 10000.00");return false}else{if(!desc){alert("— Oops, a slight problem: —\n\nPlease type a Description for this Button.");return false}}}shortCodeTemplateAttrs+='level="'+esc_attr(level)+'" ccaps="'+esc_attr(cCaps)+'" desc="'+esc_attr(desc)+'" custom="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr ($_SERVER["HTTP_HOST"])); ?>"';shortCodeTemplateAttrs+=' ra="'+esc_attr(regAmount)+'" rp="'+esc_attr(regPeriod)+'" rt="'+esc_attr(regTerm)+'"';shortCode.val(shortCodeTemplate.replace(/%%attrs%%/,shortCodeTemplateAttrs));alert("Your Button has been generated.\nPlease copy/paste the Shortcode into your Membership Options Page.");shortCode.each(function(){this.focus(),this.select()});return false};ws_plugin__s2member_pro_alipayCcapButtonGenerate=function(){var shortCodeTemplate='[s2Member-Pro-AliPay-Button %%attrs%% image="default" output="anchor" /]',shortCodeTemplateAttrs="";var shortCode=$("input#ws-plugin--s2member-pro-ccap-shortcode");var desc=$.trim($("input#ws-plugin--s2member-pro-ccap-desc").val().replace(/"/g,""));var regAmount=$("input#ws-plugin--s2member-pro-ccap-amount").val().replace(/[^0-9\.]/g,"");var regPeriod=$("select#ws-plugin--s2member-pro-ccap-term").val().split("-")[0].replace(/[^0-9]/g,"");var regTerm=$("select#ws-plugin--s2member-pro-ccap-term").val().split("-")[1].replace(/[^A-Z]/g,"");var cCaps=$.trim($.trim($("input#ws-plugin--s2member-pro-ccap-ccaps").val()).replace(/^(-all|-al|-a|-)[;,]*/gi,"").replace(/[ \-]/g,"_").replace(/[^a-z_0-9,]/gi,"").toLowerCase());cCaps=($.trim($("input#ws-plugin--s2member-pro-ccap-ccaps").val()).match(/^(-all|-al|-a|-)[;,]*/i))?((cCaps)?"-all,":"-all")+cCaps.toLowerCase():cCaps.toLowerCase();var levelCcapsPer=(regTerm!=="L")?"*:"+cCaps+":"+regPeriod+" "+regTerm:"*:"+cCaps;levelCcapsPer=levelCcapsPer.replace(/\:+$/g,"");if(!regAmount||isNaN(regAmount)||regAmount<0.01){alert("— Oops, a slight problem: —\n\nAmount must be >= 0.01");return false}else{if(regAmount>10000){alert("— Oops, a slight problem: —\n\nMaximum Amount is: 10000.00");return false}else{if(!cCaps||cCaps==="-all"){alert("— Oops, a slight problem: —\n\nPlease provide at least one Custom Capability.");return false}else{if(!desc){alert("— Oops, a slight problem: —\n\nPlease type a Description for this Button.");return false}}}}shortCodeTemplateAttrs+='level="*" ccaps="'+esc_attr(cCaps)+'" desc="'+esc_attr(desc)+'" custom="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr ($_SERVER["HTTP_HOST"])); ?>"';shortCodeTemplateAttrs+=' ra="'+esc_attr(regAmount)+'" rp="'+esc_attr(regPeriod)+'" rt="'+esc_attr(regTerm)+'"';shortCode.val(shortCodeTemplate.replace(/%%attrs%%/,shortCodeTemplateAttrs));alert("Your Button has been generated.\nPlease copy/paste the Shortcode into your WordPress Editor.");shortCode.each(function(){this.focus(),this.select()});return false};ws_plugin__s2member_pro_alipaySpButtonGenerate=function(){var shortCodeTemplate='[s2Member-Pro-AliPay-Button %%attrs%% image="default" output="anchor" /]',shortCodeTemplateAttrs="";var shortCode=$("input#ws-plugin--s2member-pro-sp-shortcode");var leading=$("select#ws-plugin--s2member-pro-sp-leading-id").val().replace(/[^0-9]/g,"");var additionals=$("select#ws-plugin--s2member-pro-sp-additional-ids").val()||[];var hours=$("select#ws-plugin--s2member-pro-sp-hours").val().replace(/[^0-9]/g,"");var regAmount=$("input#ws-plugin--s2member-pro-sp-amount").val().replace(/[^0-9\.]/g,"");var desc=$.trim($("input#ws-plugin--s2member-pro-sp-desc").val().replace(/"/g,""));if(!leading){alert("— Oops, a slight problem: —\n\nPlease select a Leading Post/Page.\n\n*Tip* If there are no Posts/Pages in the menu, it's because you've not configured s2Member for Specific Post/Page Access yet. See: s2Member -› Restriction Options -› Specific Post/Page Access.");return false}else{if(!regAmount||isNaN(regAmount)||regAmount<0.01){alert("— Oops, a slight problem: —\n\nAmount must be >= 0.01");return false}else{if(regAmount>10000){alert("— Oops, a slight problem: —\n\nMaximum Amount is: 10000.00");return false}else{if(!desc){alert("— Oops, a slight problem: —\n\nPlease type a Description for this Button.");return false}}}}for(var i=0,ids=leading;i<additionals.length;i++){if(additionals[i]&&additionals[i]!==leading){ids+=","+additionals[i]}}var spIdsHours="sp:"+ids+":"+hours;shortCodeTemplateAttrs+='sp="1" ids="'+esc_attr(ids)+'" exp="'+esc_attr(hours)+'" desc="'+esc_attr(desc)+'"';shortCodeTemplateAttrs+=' custom="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr ($_SERVER["HTTP_HOST"])); ?>" ra="'+esc_attr(regAmount)+'"';shortCode.val(shortCodeTemplate.replace(/%%attrs%%/,shortCodeTemplateAttrs));alert("Your Button has been generated.\nPlease copy/paste the Shortcode into your WordPress Editor.");shortCode.each(function(){this.focus(),this.select()});return false};ws_plugin__s2member_pro_alipayRegLinkGenerate=function(){var level=$("select#ws-plugin--s2member-pro-reg-link-level").val().replace(/[^0-9]/g,"");var subscrID=$.trim($("input#ws-plugin--s2member-pro-reg-link-subscr-id").val());var custom=$.trim($("input#ws-plugin--s2member-pro-reg-link-custom").val());var cCaps=$.trim($.trim($("input#ws-plugin--s2member-pro-reg-link-ccaps").val()).replace(/[ \-]/g,"_").replace(/[^a-z_0-9,]/gi,"").toLowerCase());var fixedTerm=$.trim($("input#ws-plugin--s2member-pro-reg-link-fixed-term").val().replace(/[^A-Z 0-9]/gi,"").toUpperCase());var $link=$("p#ws-plugin--s2member-pro-reg-link"),$loading=$("img#ws-plugin--s2member-pro-reg-link-loading");var levelCcapsPer=(fixedTerm&&!fixedTerm.match(/L$/))?level+":"+cCaps+":"+fixedTerm:level+":"+cCaps;levelCcapsPer=levelCcapsPer.replace(/\:+$/g,"");if(!subscrID){alert("— Oops, a slight problem: —\n\nPaid Subscr. ID is a required value.");return false}else{if(!custom||custom.indexOf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq ($_SERVER["HTTP_HOST"]); ?>')!==0){alert("— Oops, a slight problem: —\n\nThe Custom Value MUST start with your domain name.");return false}else{if(fixedTerm&&!fixedTerm.match(/^[1-9]+ (D|W|M|Y|L)$/)){alert("— Oops, a slight problem: —\n\nThe Fixed Term Length is not formatted properly.");return false}}}$link.hide(),$loading.show(),$.post(ajaxurl,{action:"ws_plugin__s2member_reg_access_link_via_ajax",ws_plugin__s2member_reg_access_link_via_ajax:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (wp_create_nonce ("ws-plugin--s2member-reg-access-link-via-ajax")); ?>',s2member_reg_access_link_subscr_gateway:"alipay",s2member_reg_access_link_subscr_id:subscrID,s2member_reg_access_link_custom:custom,s2member_reg_access_link_item_number:levelCcapsPer},function(response){$link.show().html('<a href="'+esc_attr(response)+'" target="_blank" rel="external">'+esc_html(response)+"</a>"),$loading.hide()});return false};ws_plugin__s2member_pro_alipaySpLinkGenerate=function(){var leading=$("select#ws-plugin--s2member-pro-sp-link-leading-id").val().replace(/[^0-9]/g,"");var additionals=$("select#ws-plugin--s2member-pro-sp-link-additional-ids").val()||[];var hours=$("select#ws-plugin--s2member-pro-sp-link-hours").val().replace(/[^0-9]/g,"");var $link=$("p#ws-plugin--s2member-pro-sp-link"),$loading=$("img#ws-plugin--s2member-pro-sp-link-loading");if(!leading){alert("— Oops, a slight problem: —\n\nPlease select a Leading Post/Page.\n\n*Tip* If there are no Posts/Pages in the menu, it's because you've not configured s2Member for Specific Post/Page Access yet. See: s2Member -› Restriction Options -› Specific Post/Page Access.");return false}for(var i=0,ids=leading;i<additionals.length;i++){if(additionals[i]&&additionals[i]!==leading){ids+=","+additionals[i]}}$link.hide(),$loading.show(),$.post(ajaxurl,{action:"ws_plugin__s2member_sp_access_link_via_ajax",ws_plugin__s2member_sp_access_link_via_ajax:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (wp_create_nonce ("ws-plugin--s2member-sp-access-link-via-ajax")); ?>',s2member_sp_access_link_ids:ids,s2member_sp_access_link_hours:hours},function(response){$link.show().html('<a href="'+esc_attr(response)+'" target="_blank" rel="external">'+esc_html(response)+"</a>"),$loading.hide()});return false}}}});