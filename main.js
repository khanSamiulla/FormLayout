$(document).ready(function(){
   $('.disable-field').prop('disabled', true);
   $('#update-and-cancel').hide();
   $('#eidt-info').on('click', function(){
      $('.disable-field').prop('disabled', false);
      $('#eidt-info').hide();
      $('#update-and-cancel').show();
   })
   $('#cancel-edit').on('click', function(){
      $('.disable-field').prop('disabled', true);
      $('#update-and-cancel').hide();
      $('#eidt-info').show();
   })

   // ************** PROGRESS BAR FUNCTIONALITY ****************
   // $('#personal-details').on('click', function(){
   //    $('.progress-block .steps-block').addClass('step-one');
   // })
   
   // $('#professional-details').on('click', function(){
   //    $('.progress-block .steps-block').addClass('step-two');
   // })
   
   // $('#educational-details').on('click', function(){
   //    $('.progress-block .steps-block').addClass('step-three');
   // })

   
   $('#personal-details').on('click', function(){
      $('.step-1').addClass('active');
   })
   
   $('#professional-details').on('click', function(){
      $('.step-2').addClass('active');
   })
   
   $('#educational-details').on('click', function(){
      $('.step-3').addClass('active');
   })
   $('#key-skills-accordion').on('click', function(){
      $('.step-4').addClass('active');
   })
   $('#interested-jobs').on('click', function(){
      $('.step-5').addClass('active');
   })

   var keySkills = ['Team Management', 'System Automation'];
   for(var skill in keySkills){
      var newElement = document.createElement('div');
      newElement.id = keySkills[skill];
      newElement.className = "skill-list-item";
      newElement.innerHTML = keySkills[skill];
      $('#key-skills').append(newElement);
   }
   

   // var professionalHistory = ['Salt Lake Board of Realtors', 'Wesley Johnson'];
   // createLit();

   // $('#add-organisation').on('click', function () {
   //    var newItem = $('#professional-history').val();
   //    professionalHistory.push(newItem);
   //    createLit();

   // });

   // function createLit(){
   //    $('#professional-history-details').empty();
   //    professionalHistory.forEach(function(item,index){
   //       $('#professional-history-details').append('<li data-index='+index+'>'+item+'<span class="close-chip">x</span>'+ '</li>');
   //      });
   // }
   
   // $(document).on('click', '.close-chip', function(){
   //    var intemIndex = $(this).closest('li').data('index');
   //    console.log(intemIndex);
   //    professionalHistory.splice(intemIndex, 1);
   //    createLit();
   // })

   var organisationDetails = ['Salt Lake Board of Realtors', 'Wesley Johnson'];
   showListofOrganisation();

   $('#update-organisation-details').on('click', function(){
      var newOrganisationItem = $('#organisation-name').val();
      organisationDetails.push(newOrganisationItem);
      showListofOrganisation();
   });
   
   function showListofOrganisation(){
      $('#organisation-history-details').empty();
      organisationDetails.forEach(function(item, index){
         $('#organisation-history-details').append('<li class="orgnisation-list-item" data-index='+index+'>'+item+'<span class="close-chip">x</span>'+ '</li>');
      });
   }

   $(document).on('click', '.close-chip', function(){
      var intemIndex = $(this).closest('li').data('index');
      organisationDetails.splice(intemIndex, 1);
      showListofOrganisation();
   })

   // RADIO BUTTONS FUNCTIONALITY BELOW
   $('.organisation-details-block').hide();
   $('input[type="radio"]').click(function(){
      if($(this).attr("value")=="working"){
         $('.if-working').show();
         $('.if-not-working').hide();
         $('#add-organisation-details').on('click', function(){
            $('.organisation-details-block').show();
         })
         
      }  
      if($(this).attr("value")=="not-working"){
         $('.if-not-working').show();
         $('.if-working').hide();
         
      }  
   });

   
   
});